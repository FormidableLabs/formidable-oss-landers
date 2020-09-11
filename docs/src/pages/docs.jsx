import React from "react";
import { useRouteData } from "react-static";

export default function Docs() {
  const { pages } = useRouteData();
  return (
    <div>
      <h1>It&rsquo;s the docs page!</h1>

      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <a href={"/docs/" + page.route}>{page.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
