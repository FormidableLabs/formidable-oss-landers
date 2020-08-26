import React from "react";
import List from "../components/List";
import { useRouteData } from "react-static";

export default function Docs() {
  const { data, TOC } = useRouteData();

  console.log(data);
  console.log(TOC);

  return (
    <div>
      <h1>It&rsquo;s the docs page!</h1>

      {TOC.length > 0 && <List items={TOC} />}
    </div>
  );
}
