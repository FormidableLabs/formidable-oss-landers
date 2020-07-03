import React from "react";

const Link = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default Link;
