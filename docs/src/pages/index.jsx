import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "formidable-oss-landers";
import { ProjectBadge } from "formidable-oss-badges";

const Wrapper = styled.div`
  width: 100%;
`;

const Component = styled.div`
  width: ${(props) => props.width}px;
`;

const IndexPage = ({ onChangeTheme }) => {
  // TODO: Set width of Component wrapper & add/remove the mobile/tablet/desktop classes
  const [width, setWidth] = useState(320);
  const [mediaClass, setMediaClass] = useState("mobile");

  const handleChange = (ev) => {
    onChangeTheme(ev.target.value);
  };

  const onClickMobile = () => {
    setWidth(320);
    setMediaClass("mobile");
  };

  const onClickTablet = () => {
    setWidth(768);
    setMediaClass("tablet");
  };

  const onClickDesktop = () => {
    setWidth(1200);
    setMediaClass("tablet desktop");
  };

  return (
    <Wrapper>
      <h1>Formidable OSS Landers!</h1>
      <Link to="/renature">Renature Example</Link>
      <br />
      <select onChange={handleChange}>
        <option value="purple">purple theme</option>
        <option value="blue">blue theme</option>
      </select>
      <br />
      <button onClick={onClickMobile}>Mobile</button>
      <button onClick={onClickTablet}>Tablet</button>
      <button onClick={onClickDesktop}>Desktop</button>

      <Component className={mediaClass} width={width}>
        <Header
          title="OSS Name"
          badge={
            <ProjectBadge
              isHoverable={false}
              color="#f2f2f2"
              abbreviation="Os"
              description="OSS Name"
            />
          }
          description="Short description of the project goes here."
          install="npm install oss-name"
          button={{ label: "Documentation", href: "#button" }}
          nav={[{ label: "Docs", href: "#docs" }]}
          linkComponent={Link}
        />
      </Component>
    </Wrapper>
  );
};

export default IndexPage;
