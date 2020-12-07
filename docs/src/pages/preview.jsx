import React, { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import ComponentPreview from "../components/ComponentPreview";
import ThemeSelect from "../components/ThemeSelect";
import { themes } from "../styles/theme";

const Wrapper = styled.div`
  margin-top: 5rem;

  color: ${(props) => props.theme.colors.darkerPrimary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.25rem;

  code {
    padding: 0.05em 0.2em;

    border-radius: 4px;
    font-family: ${(props) => props.theme.fonts.code};
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 50ch;

  code {
    background-color: ${(props) => props.theme.colors.lighterPrimary};
    color: ${(props) => props.theme.colors.darkerPrimary};
  }

  > p {
    margin: 1em 0 0 0;
  }
`;

const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 1em;

  font-size: 0.8rem;
`;

const NavList = styled.ul`
  list-style: none;
`;

const SlideIn = styled.span`
  display: inline-block;

  color: inherit;
  transition: transform 200ms ease, opacity 200ms ease;
`;

const NavLink = styled.a`
  display: inline-block;
  position: relative;

  &:link {
    color: #274aec;

    &:before {
      background-color: #274aec;
      border-color: #274aec;
    }
  }

  &:visited {
    color: #274aec;

    &:before {
      background-color: #274aec;
      border-color: #274aec;
    }
  }

  &:hover {
    color: #0a2ebd;

    &:before {
      background-color: #0a2ebd;
      border-color: #0a2ebd;
    }
  }

  &:active {
    color: #717171;

    &:before {
      background-color: #717171;
      border-color: #717171;
    }
  }

  &:before {
    content: " ";

    display: inline-block;
    margin-right: 0.75em;
    height: 0.75em;
    width: 0.75em;
    vertical-align: middle;

    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    box-shadow: inset 0 0 0 0.25em white;
  }
`;

const NavListItem = styled.li`
  margin-top: 1em;
  margin-left: 0;
  padding: 0;

  ${SlideIn} {
    opacity: 0;
    transform: translate(2em, 0);
  }

  &:hover {
    ${SlideIn} {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const ControlList = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 1em;

  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid ${(props) => props.theme.colors.lighterNeutral};
  font-size: 0.8rem;
`;

const ControlItem = styled.div`
  margin-left: 1em;

  > * + * {
    margin-left: 1em;
  }
`;

const StyledButton = styled.button.attrs({ type: "button" })`
  padding: 0.25em 1em;
  border: 1px solid black;
  border-radius: 20rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.selected &&
    `
    background-color: ${props.theme.colors.lighterNeutral};
    border-color: ${props.theme.colors.lightNeutral};
    color: ${props.theme.colors.neutral};
  `};
`;

const Title = styled.h1`
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 2.5rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  margin-top: 2em;
`;

const DocsPage = () => {
  const [width, setWidth] = useState(320);
  const [mediaClass, setMediaClass] = useState("mobile");
  const [theme, setTheme] = useState(themes.default);

  const handleChange = useCallback((ev) => {
    const newTheme = ev.target.value;
    if (themes[newTheme]) {
      setTheme(themes[newTheme]);
    } else {
      console.warn("Could not find a theme for", newTheme, "in", themes);
    }
  }, theme);

  const handleClick = (name) => (ev) => {
    switch (name) {
      case "mobile":
        setWidth(320);
        setMediaClass("mobile");
        break;
      case "tablet":
        setWidth(768);
        setMediaClass("tablet");
        break;
      case "desktop":
        setWidth(1200);
        setMediaClass("tablet desktop");
        break;
      default:
        break;
    }
  };

  console.log(theme);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Content>
          <Title>Guide to Formidable OSS Landers</Title>
          <p>
            The goal is to enable a speedy deployment of an open source
            project&rsquo;s documentation site and maintain brand consistency
            across all of them. The components below are here to serve this
            purpose.
          </p>
          <p>
            Use the controls above to change color themes of the components or
            view how they change at each breakpoint.
          </p>
          <p>
            Visit 👉<Link to="/renature">Renature Example</Link> using these
            components.
          </p>
        </Content>
        <Nav>
          <NavList>
            <NavListItem>
              <NavLink href="#header">
                <SlideIn>Header</SlideIn>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#features">
                <SlideIn>Features</SlideIn>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#preview">
                <SlideIn>Preview</SlideIn>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#custom-section">
                <SlideIn>Custom Section</SlideIn>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#get-started">
                <SlideIn>Get Started</SlideIn>
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="#featured-oss">
                <SlideIn>Featured OSS</SlideIn>
              </NavLink>
            </NavListItem>
          </NavList>
        </Nav>
        <ControlList>
          <ControlItem>
            <StyledButton
              onClick={handleClick("mobile")}
              selected={mediaClass === "mobile"}
            >
              Mobile
            </StyledButton>
            <StyledButton
              onClick={handleClick("tablet")}
              selected={mediaClass === "tablet"}
            >
              Tablet
            </StyledButton>
            <StyledButton
              onClick={handleClick("desktop")}
              selected={mediaClass === "tablet desktop"}
            >
              Desktop
            </StyledButton>
          </ControlItem>
          <ControlItem>
            <ThemeSelect currentTheme={theme.key} onChange={handleChange} />
          </ControlItem>
        </ControlList>
        <Content>
          <Subtitle id="features">
            <code>&lt;Features&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<Features
  list={[
    {
      image: "http://placekitten.com/300/300",
      title: "Feature 1",
      description: "Feature 1 description goes here!",
    },
    {
      image: "http://placekitten.com/300/300",
      title: "Feature 2",
      description: "Feature 1 description goes here!",
    },
    {
      image: "http://placekitten.com/300/300",
      title: "Feature 3",
      description: "Feature 1 description goes here!",
    },
  ]}
/>`}
        />
        <Content>
          <Subtitle id="preview">
            <code>&lt;Preview&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<Preview
  title="Simple greetings"
  list={[
    {
      title: "Say hello!",
      props: {
        code: "<strong>hello</strong>",
      },
    },
    {
      title: "Say howdy!",
      props: {
        code: "<strong>howdy</strong>",
      },
    },
  ]}
/>`}
        />
        <Content>
          <Subtitle id="custom-section">
            <code>&lt;CustomSection&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<CustomSection
  color="dark"
  title="Anything is possible"
  description="(within reason, time, ability, drive, and support)"
  components={[<div>🔮magic🔮</div>]}
/>`}
        />
        <Content>
          <Subtitle id="get-started">
            <code>&lt;GetStarted&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<GetStarted
  description="The world is an oyster"
  button={{ label: "Documentation", href: "#docs" }}
/>`}
        />
        <Content>
          <Subtitle id="featured-oss">
            <code>&lt;FeaturedOSS&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<FeaturedOSS
  list={[
    { 
      badge: <div>badge</div>, 
      href: "#hello", 
      title: "Hello", 
      description: "The first greeting that comes to my mind" 
    }, 
    { 
      badge: <div>badge</div>, 
      href: "#howdy", 
      title: "Howdy", 
      description: "The second greeting that comes to my mind" 
    }
  ]}
/>`}
        />
      </ThemeProvider>
    </Wrapper>
  );
};

export default DocsPage;
