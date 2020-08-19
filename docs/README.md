# Demo Documentation Site

Now built with react-static!

## Getting Started

To install and run the docs site locally:

```sh
$ cd demo
$ yarn install
$ yarn start
```

```sh
$ yarn demo
```

Then visit: http://localhost:3000/open-source/demo/

## Tips for developing

- Almost all of your code will be executed in two contexts: first in node for server-side rendering and static html generation, then client-side as a PWA. In addition to writing [node-safe code](https://github.com/nozzle/react-static/blob/master/docs/concepts.md#writing-universal-node-safe-code), this also means that it's necessary to validate that both contexts are working as expected.

- In addition to two execution contexts, there are three stages: development, staging, and production. `yarn start` uses a local dev server with live reload that takes about one second to rebuild. This is a good choice for most local development, but it's important to keep in mind that **the development server does not build the static html.** For that, you will want to use `yarn build && yarn serve` used for staging and production deploys.

- When debugging an issue with the static html output, don't be shy about cracking open the `dist` folder and looking at the output!
