import path from "path";
import { getFiles, processMdFile } from "./src/utils/file";
import { groupBy } from "lodash";

export default {
  getRoutes: async () => {
    const dir = path.resolve(__dirname, "src", "content");
    const files = await getFiles(dir);
    const docs = await Promise.all(files.map((f) => processMdFile(dir, f)));
    const docsGroups = groupBy(docs, "pathKey");
    const docsRoutes = Object.entries(docsGroups)
      .map(([pathKey, docGroup]) => [
        {
          path: `/docs/${pathKey}`,
          getData: () => ({ docs }),
          children: docGroup.map((doc) => ({
            path: `${doc.fileName.replace(/\.md$/, "")}`,
            template: "src/containers/Doc",
            getData: () => ({ doc }),
          })),
        },
      ])
      .flat();

    return [...docsRoutes];
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
