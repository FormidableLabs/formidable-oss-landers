import path from "path";
import { getMarkdownPages, createTOC } from "formidable-oss-landers/lib/server";

export default {
  getRoutes: async () => {
    const docsPages = await getMarkdownPages("./src/content");
    const TOC = await createTOC(docsPages, (doc, i) => ({
      name: doc.fileName,
      linkRoot: `/docs/${doc.pathKey}/`,
      id: (slug, depth) => `${i}-${slug}`,
      maxDepth: 2,
    }));

    return [
      {
        path: "/docs",
        getData: () => ({ data: docsPages, TOC }),
        children: docsPages.map((doc) => ({
          path: doc.route,
          template: "src/containers/Doc",
          getData: () => ({ doc }),
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
