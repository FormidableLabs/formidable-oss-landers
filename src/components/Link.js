import React from "react";

const Link = ({ children, className, ...props }) => {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;
