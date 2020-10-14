import Document from "./src/html";
import metadata from "./src/constants";
import { getPages, createPageTOC } from "formidable-oss-landers/lib/server";

export default {
  paths: {
    src: "src",
    dist: `dist`,
    buildArtifacts: "node_modules/.cache/react-static/artifacts/",
    devDist: "node_modules/.cache/react-static/dist/",
    temp: "node_modules/.cache/react-static/temp/",
    // public: "public", // The public directory (files copied to dist during build)
  },
  plugins: [
    require.resolve("react-static-plugin-styled-components"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-react-router"),
  ],
  Document,
  getSiteData: () => ({
    title: metadata.title,
  }),
  getRoutes: async () => {
    const pages = await getPages("./src/content", {
      name: (page) => page?.metadata?.title ?? page.route.split("/").pop(),
    });

    return [
      {
        path: "/",
        template: "src/pages/home",
      },
      {
        path: "/preview",
        template: "src/pages/preview",
      },
      {
        path: "/docs",
        template: "src/pages/docs",
        getData: () => ({ pages }),
        children: pages.map((doc) => ({
          path: doc.route,
          template: "src/pages/docs",
          getData: async () => {
            const toc = await createPageTOC(doc.filePath);
            return { doc, toc, pages };
          },
        })),
      },
    ];
  },
};
