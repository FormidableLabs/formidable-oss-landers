import React from "react";
import PropTypes from "prop-types";
import { Link } from "./Router";

function List({ items = [], ...props }) {
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
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default List;
