import React from "react";
import marksy from "marksy";

export const compile = marksy({
  createElement: React.createElement,
});
