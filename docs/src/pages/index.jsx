import React, { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { ProjectBadge } from "formidable-oss-badges";

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

  p,
  h2 {
    margin: 1em 0 0 0;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 50ch;

  code {
    background-color: ${(props) => props.theme.colors.lighterPrimary};
    color: ${(props) => props.theme.colors.darkerPrimary};
  }
`;

const Nav = styled.div`
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

const NavItem = styled.div`
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

const Subtitle = styled.h2``;

const IndexPage = () => {
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

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Content>
          <Title>Guide to Formidable OSS Landers</Title>
          <p>
            The goal is to enable a speedy deployment of an open source
            project's documentation site and maintain brand consistency across
            all of them. The components below are here to serve this purpose.
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
          <NavItem>
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
          </NavItem>
          <NavItem>
            <ThemeSelect currentTheme={theme.key} onChange={handleChange} />
          </NavItem>
        </Nav>
        <Content>
          <Subtitle>
            <code>&lt;Header&gt;</code> Component
          </Subtitle>
        </Content>
        <ComponentPreview
          media={mediaClass}
          width={width}
          theme={theme}
          code={`<Header
  title="Example"
  badge={
    <ProjectBadge
      isHoverable={false}
      color={theme.colors.primary}
      abbreviation="Ex"
      description="Example"
    />
  }
  description="Short description of the project goes here."
  install="npm install example"
  button={{ label: "Documentation", href: "#button" }}
  nav={[{ label: "Docs", href: "#docs" }]}
  linkComponent={Link}
/>`}
        />
        <Content>
          <Subtitle>
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
          <Subtitle>
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
      </ThemeProvider>
    </Wrapper>
  );
};

export default IndexPage;
