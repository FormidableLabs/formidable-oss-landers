import React from "react";
import PropTypes from "prop-types";
import { useRouteData } from "react-static";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
import marksy from "marksy";
import slugify from "slugify";

const slugifyChildren = (children = []) =>
  slugify(children.join(" "), { lower: true });

// TODO: decide on which md parser to use, check other docs repos for prior work
const compile = marksy({
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

const List = ({ items = [], ...props }) => {
  return (
    <ul {...props}>
      {items.map((item) => {
        return (
          <li key={item.slug}>
            <Link to={window.location.pathname + "#" + item.slug}>
              {item.name}
            </Link>
            {item.children.length > 0 && <List items={item.children} />}
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default function Doc() {
  const { doc, toc } = useRouteData();
  if (!doc || !toc) {
    return null;
  }
  const compiled = compile(doc.content);
  return (
    <div>
      <List items={toc} />
      {compiled.tree}
    </div>
  );
}
