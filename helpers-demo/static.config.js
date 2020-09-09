import path from "path";
import { getPages, createPageTOC } from "formidable-oss-landers/lib/server";

export default {
  getRoutes: async () => {
    const pages = await getPages("./src/content", {
      name: (page) => page?.metadata?.title ?? page.route.split("/").pop(),
    });

    return [
      {
        path: "/docs",
        getData: () => ({ pages }),
        children: pages.map((doc) => ({
          path: doc.route,
          template: "src/containers/Doc",
          getData: async () => {
            const toc = await createPageTOC(doc.filePath);

            return { doc, toc };
          },
        })),
      },
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
