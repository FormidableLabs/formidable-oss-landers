import React from 'react';
import styled from 'styled-components';

import { themeConfig } from '../styles/theme';

const Wrapper = styled.div``;

const ThemeSelect = ({ className, currentTheme, onChange }) => {
  const renderOptions = Object.keys(themeConfig).map((name) => {
    const theme = themeConfig[name];
    return (
      <option key={name} value={name}>
        {theme.label}
      </option>
    );
  });
  return (
    <Wrapper className={className}>
      <span>Theme: </span>
      <select value={currentTheme} onChange={onChange}>
        {renderOptions}
      </select>
    </Wrapper>
  );
};

export default ThemeSelect;
