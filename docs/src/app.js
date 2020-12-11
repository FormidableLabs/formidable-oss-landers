import React, { Suspense, useLayoutEffect, useEffect, useState } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "formidable-oss-landers";
import { guideTheme } from "./styles/theme";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";
import { ResizeObserver as _ResizeObserver } from "@juggle/resize-observer";
import get from "lodash/get";
import { Route } from "react-router";
import { layout } from "../../src/styles/theme";

const HEADER_PIXEL_HEIGHT = layout.headerHeight.split("rem")[0] * 10;
const SCROLL_PIXEL_OFFSET = 25;
const DEFAULT_PAGE_CONTENT_CLASS = ".Page-content";

const scrollContent = async (
  hash,
  contentPaneClass = DEFAULT_PAGE_CONTENT_CLASS
) => {
  const item = document.querySelector(`${contentPaneClass} ${hash}`);

  if (!item) {
    return;
  }

  const rect = item.getBoundingClientRect();
  const truePosition =
    (rect.top + window.pageYOffset || document.documentElement.scrollTop) -
    HEADER_PIXEL_HEIGHT -
    SCROLL_PIXEL_OFFSET;

  scroll.scrollTo(truePosition, {
    duration: 200,
    delay: 0,
    smooth: "easeOutQuad",
  });
};

const checkScrollRoutes = (pathname) => pathname.includes("docs");

const ScrollToCurrentSection = ({ location, children }) => {
  const { pathname, hash = "" } = location;

  const [pageContentHeight, setPageContentHeight] = useState(null);

  const pageContentHeightObserver = new _ResizeObserver((element, observer) => {
    const elementHeight = get(element, ["0", "contentRect", "height"], 0);
    setPageContentHeight(elementHeight);
    observer.disconnect();
  });

  useEffect(() => {
    if (typeof window !== "undefined" && pageContentHeight === null) {
      const mainElement = document.querySelector(DEFAULT_PAGE_CONTENT_CLASS);
      if (mainElement) {
        pageContentHeightObserver.observe(mainElement);
      }
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (checkScrollRoutes(pathname)) {
      scrollContent(hash);
    }
    scroll.scrollTo(0, { duration: 0 });
  }, [hash, pathname, pageContentHeight]);

  return children;
};

ScrollToCurrentSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.object,
};

const App = () => {
  return (
    <Root>
      <ThemeProvider theme={guideTheme}>
        <GlobalStyles />
        <Suspense fallback={<div>loading</div>}>
          <Routes
            render={({ routePath, getComponentForPath }) => (
              <Route path="*">
                {(props) => {
                  const Comp = getComponentForPath(routePath);
                  return (
                    <ScrollToCurrentSection {...props}>
                      {Comp}
                    </ScrollToCurrentSection>
                  );
                }}
              </Route>
            )}
          />
        </Suspense>
      </ThemeProvider>
    </Root>
  );
};

export default App;
