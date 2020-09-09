import React from "react";
import { useRouteData } from "react-static";

import { Link } from "../components/Router";
import List from "../components/List";
import { compile } from "../marksy";

export default function Doc() {
  const { doc, toc } = useRouteData();
  const compiled = compile(doc.content);

  return (
    <div>
      <Link to="/docs/">{"<"} Back</Link>
      <br />

      <List items={toc} />

      {compiled.tree}
    </div>
  );
}
