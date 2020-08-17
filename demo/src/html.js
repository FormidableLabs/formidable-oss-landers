import React from "react";
import PropTypes from "prop-types";

import metadata from "./constants";

const CustomDocument = ({ Html, Head, Body, children }) => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={`${metadata.title} Documentation`} />
        <meta
          property="og:site_name"
          content={`${metadata.title} Documentation`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content="./static/og-image.png" />
        <meta property="og:description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/Favicon32.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ff4081" />
        <meta name="msapplication-config" content="./browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>{metadata.title} Documentation</title>
      </Head>
      <Body>
        <div id="content">{children}</div>
      </Body>
    </Html>
  );
};

CustomDocument.propTypes = {
  Body: PropTypes.func.isRequired,
  Head: PropTypes.func.isRequired,
  Html: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomDocument;
