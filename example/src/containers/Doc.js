import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

export default function Doc() {
  const { doc } = useRouteData();

  console.log(doc);

  return (
    <div>
      <Link to="/docs/">{"<"} Back</Link>
      <br />
    </div>
  );
}
