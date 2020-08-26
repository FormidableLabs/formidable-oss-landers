import React from "react";
import PropTypes from "prop-types";
import { Link } from "./Router";

function List({ items = [] }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
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
