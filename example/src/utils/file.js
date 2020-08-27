const yamlFront = require("yaml-front-matter");
const path = require("path");
const { readdir, readFile } = require("fs").promises;
const _ = require("lodash");

async function getFiles(dir, recursive = true) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);

      if (!recursive && dirent.isDirectory()) return [];

      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );

  return files.flat();
}

async function processMdFile(dir, filePath) {
  const pathKey = path
    .relative(dir, path.dirname(filePath))
    .split(path.sep)
    .join("/");

  const rawContent = await readFile(filePath, { encoding: "utf8" });
  const { __content: content, ...metadata } = yamlFront.loadFront(rawContent);
  const fileName = path.basename(filePath);

  return {
    filePath,
    fileName,
    pathKey,
    content,
    metadata,
  };
}

module.exports = {
  getFiles,
  processMdFile,
};
