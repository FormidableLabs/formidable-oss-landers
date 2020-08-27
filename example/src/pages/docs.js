import React from "react";
import { Link } from "components/Router";
import { useRouteData } from "react-static";

export default function Docs() {
  const { docs } = useRouteData();

  console.log(docs);

  return (
    <div>
      <h1>It&rsquo;s the docs page!</h1>

      <Link to="/"></Link>
    </div>
  );
}
