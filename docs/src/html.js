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
        <meta
          property="og:title"
          content={`Formidable OSS Landers Documentation`}
        />
        <meta
          property="og:site_name"
          content={`Formidable OSS Landers Documentation`}
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
        {/* <link rel="manifest" href="./site.webmanifest" /> */}
        <meta name="msapplication-TileColor" content="#ff4081" />
        <meta name="msapplication-config" content="./browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Rubik:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <title>Formidable OSS Landers Documentation</title>
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
