import { isBrowser } from "./utils/env";

if (isBrowser) throw new Error("Cannot run server utils in the browser!");

export {
  getFiles,
  processMdFile,
  getMarkdownPages,
  createTOC,
} from "./utils/file";
