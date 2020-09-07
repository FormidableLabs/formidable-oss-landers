import { isBrowser } from "./utils/env";

if (isBrowser) throw new Error("Cannot run server utils in the browser!");

export { createPageTOC, getPages } from "./utils/file";
