/* eslint-disable react/prop-types */
import React from "react";
import marksy from "marksy";
import slugify from "slugify";

const slugifyChildren = (children = []) =>
  slugify(children.join(" "), { lower: true });

export const compile = marksy({
  createElement: React.createElement,
  elements: {
    h1({ id, children }) {
      return <h1 id={slugifyChildren(children)}>{children}</h1>;
    },
    h2({ id, children }) {
      return <h2 id={slugifyChildren(children)}>{children}</h2>;
    },
    h3({ id, children }) {
      return <h3 id={slugifyChildren(children)}>{children}</h3>;
    },
    h4({ id, children }) {
      return <h4 id={slugifyChildren(children)}>{children}</h4>;
    },
    h5({ id, children }) {
      return <h5 id={slugifyChildren(children)}>{children}</h5>;
    },
    h6({ id, children }) {
      return <h6 id={slugifyChildren(children)}>{children}</h6>;
    },
  },
});
