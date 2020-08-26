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

export async function processMdFile(dir, filePath) {
  const pathKey = path
    .relative(dir, path.dirname(filePath))
    .split(path.sep)
    .join("/");

  const rawContent = await fs.readFile(filePath, { encoding: "utf8" });
  const { __content: content, ...metadata } = loadFront(rawContent);
  const fileName = path.parse(filePath).name;
  const route = [pathKey, fileName].filter(Boolean).join("/");

  return {
    filePath,
    fileName,
    pathKey,
    content,
    metadata,
    route,
  };
}

export async function getMarkdownPages(dir) {
  const files = await getFiles(dir);
  const pages = await Promise.all(files.map((f) => processMdFile(dir, f)));

  // Sort pages by pathKey and metadata order
  pages.sort((a, b) => {
    if (a.pathKey === b.pathKey)
      return Math.sign(a.metadata?.order - b.metadata?.order);

    if (a.pathKey.startsWith(b.pathKey)) return -1;
    if (b.pathKey.startsWith(a.pathKey)) return 1;

    return 0;
  });

  return pages;
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

const removeLinks = (node) => {
  delete node.parent;

  node.children.forEach(removeLinks);
};

const defaultSlugify = (str) => slugify(str, { lower: true });
const defaultCreateId = (slug, depth) => slug;

export const createFileTOC = async (filePath, options = {}) => {
  const {
    name = "",
    linkRoot = "/",
    createSlug = defaultSlugify,
    maxDepth = Infinity,
    id = defaultCreateId,
  } = options;
  const md = await fs.readFile(filePath, { encoding: "utf8" });
  const lines = md.split(LINE_BREAK_REGEX).map((line) => line.trim());
  const slug = createSlug(name);

  const rootParent = {
    id: id(slug, 0),
    name,
    depth: 0,
    slug,
    link: linkRoot + slug,
    children: [],
    parent: null,
  };

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

    const next = {
      id: id(slug, depth),
      name,
      depth,
      slug,
      link: rootParent.link + "#" + slug,
      parent: closestParent,
      children: [],
    };

    closestParent.children.push(next);

    parent = next;
  }

  // Clean up circular refs
  removeLinks(rootParent);

  return rootParent;
};

export const createTOC = (docs = [], getTocOptions = (doc, i) => ({})) => {
  const filePaths = docs.map((doc) => doc.filePath);

  return Promise.all(
    filePaths.map((filePath, i) =>
      createFileTOC(filePath, getTocOptions(docs[i], i))
    )
  );
};
