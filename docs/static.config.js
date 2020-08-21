import path from 'path';

import Document from './src/html';
import metadata from './src/constants';

export default {
  paths: {
    src: 'src',
    dist: `dist`,
    buildArtifacts: 'node_modules/.cache/react-static/artifacts/',
    devDist: 'node_modules/.cache/react-static/dist/',
    temp: 'node_modules/.cache/react-static/temp/',
    // public: "public", // The public directory (files copied to dist during build)
  },
  plugins: [
    // [
    //   "react-static-plugin-md-pages",
    //   {
    //     location: "./content",
    //     template: "./src/pages/docs",
    //     pathPrefix: "docs",
    //   },
    // ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-styled-components'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-react-router'),
  ],
  Document,
  getSiteData: () => ({
    title: metadata.title,
  }),
};
