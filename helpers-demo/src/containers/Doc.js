import React from "react";
import { useRouteData } from "react-static";

import { Link } from "../components/Router";
import { compile } from "../marksy";

export default function Doc() {
  const { doc } = useRouteData();
  const compiled = compile(doc.content);

  return (
    <div>
      <Link to="/docs/">{"<"} Back</Link>
      <br />

      {compiled.tree}
    </div>
  );
}
