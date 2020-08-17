import Document from './src/html';
import metadata from './src/siteMetadata';

const basePath = 'open-source/demo';

export default {
  paths: {
    src: 'src',
    dist: `dist/${basePath}`,
    buildArtifacts: 'node_modules/.cache/react-static/artifacts/',
    devDist: 'node_modules/.cache/react-static/dist/',
    temp: 'node_modules/.cache/react-static/temp/',
    public: 'public', // The public directory (files copied to dist during build)
  },
  plugins: [
    [
      'react-static-plugin-md-pages',
      {
        location: './content',
        template: './src/screens/docs',
        pathPrefix: 'docs',
      },
    ],
    'react-static-plugin-styled-components',
    'react-static-plugin-sitemap',
    'react-static-plugin-react-router',
  ],
  basePath,
  stagingBasePath: basePath,
  devBasePath: basePath,
  Document,
  getSiteData: () => ({
    title: metadata.title,
  }),
  getRoutes: async () => [
    {
      path: '/',
      template: require.resolve('./src/screens/home'),
    }
  ],
};
