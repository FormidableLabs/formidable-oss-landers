import React from "react";
import PropTypes from "prop-types";

const Link = ({ children, className, ...props }) => {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Link;
