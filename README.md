# Formidable OSS Landers

React components for all of the Formidable OSS websites.

## Running docs

You'll need to [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/#toc-yarn-link-in-package-you-want-to-link) `formidable-oss-landers` to run the docs:

```
yarn
yarn build
yarn link
cd ./docs
yarn
yarn link formidable-oss-landers
yarn start
```
