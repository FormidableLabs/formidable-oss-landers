import styled, { css } from 'styled-components';
import { tablet, desktop } from '../styles';

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(3)};

  ${tablet`
    max-width: ${(props) => props.theme.spacing(91)};
  `};

  ${desktop`    
    max-width: ${(props) => props.theme.spacing(131)};
  `}
`;

export const breakGrid = css`
  margin-left: ${(props) => props.theme.spacing(-3)};
  margin-right: ${(props) => props.theme.spacing(-3)};
`;

export default Grid;
