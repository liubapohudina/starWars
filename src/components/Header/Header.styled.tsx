import styled from "styled-components";
import { container, tabletScreenForElements, fromDesktopScreenForElements } from "../../mediaQuery";

export const HeaderStyled = styled.header`
 ${container};
 padding-top: 30px;
 padding-bottom: 30px;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  ${tabletScreenForElements`
    width: 450px;
  `};
  ${fromDesktopScreenForElements`
    width: 600px;
    height: 300px;
  `};
`;