import { promises as fs } from "fs";
import path from "path";
import slugify from "slugify";
import { loadFront } from "yaml-front-matter";

export async function getFiles(dir, recursive = true) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);

      if (!recursive && dirent.isDirectory()) return [];

      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );

  return files.flat();
}

const LINE_BREAK_REGEX = /[\r\n]+/;
const HEADING_REGEX = /^(?<prefix>#{1,6})\s(?<name>.*)$/i;

const findClosestParent = (depth, startingParent) => {
  let parent = startingParent;

  while (depth <= parent.depth) {
    parent = parent.parent;
  }

  return parent;
};

const defaultSlugify = (str) => slugify(str, { lower: true });

class HeadingNode {
  constructor(options) {
    this.depth = options?.depth ?? 0;
    this.name = options?.name ?? "";
    this.slug = options?.slug ?? "";
    this.children = options?.children ?? [];
    this.parent = options?.parent ?? null;
  }

  toJSON() {
    return {
      depth: this.depth,
      children: this.children,
      name: this.name,
      slug: this.slug,
    };
  }
}

export const createPageTOC = async (filePath, options = {}) => {
  const { createSlug = defaultSlugify, maxDepth = 3 } = options;
  const md = await fs.readFile(filePath, { encoding: "utf8" });
  const lines = md.split(LINE_BREAK_REGEX).map((line) => line.trim());

  const rootParent = new HeadingNode();

  let parent = rootParent;

  for (const line of lines) {
    const match = line.match(HEADING_REGEX);

    if (match == null) continue;

    const { prefix = "#", name = "" } = match.groups;
    const depth = prefix.length;

    if (depth >= maxDepth) continue;

    const closestParent =
      depth > parent.depth ? parent : findClosestParent(depth, parent);

    const slug = createSlug(name);

    const next = new HeadingNode({
      name,
      slug,
      depth,
      parent: closestParent,
    });

    closestParent.children.push(next);

    parent = next;
  }

  return rootParent.children;
};

const defaultMapPathToRoute = (dir, filePath) =>
  path.relative(dir, filePath).replace(/\.md$/i, "");

const defaultSortFn = (a, b) => {
  if (a.parentRoute === b.parentRoute)
    return Math.sign(a.metadata?.order - b.metadata?.order);

  if (a.parentRoute.startsWith(b.parentRoute)) return 1;

  return 0;
};

const defaultNameFn = (page) => page.filePath;

export const getPages = async (dir, options = {}) => {
  const {
    mapPathToRoute = defaultMapPathToRoute,
    sort = defaultSortFn,
    name = defaultNameFn,
  } = options;
  const filePaths = await getFiles(dir);

  const pages = await Promise.all(
    filePaths.map(async (filePath) => {
      const rawContent = await fs.readFile(filePath, { encoding: "utf8" });
      const { __content: content, ...metadata } = loadFront(rawContent);
      const route = mapPathToRoute(dir, filePath);
      const parentRoute = route.split("/").slice(0, -1).join("/");

      const page = {
        filePath,
        route,
        parentRoute,
        content,
        metadata,
      };

      page.name = name(page);

      return page;
    })
  );

  pages.sort(sort);

  return pages;
};
