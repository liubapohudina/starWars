import styled from "styled-components";
import { fromTabletScreenForElements, fromDesktopScreenForElements } from "../../mediaQuery";

export const GraphBox = styled.div`
  height: 50vh;
  width: 300px;
  ${fromTabletScreenForElements`
    width: 700px;
  `};
  ${fromDesktopScreenForElements`
    width: 1000px;
  `};
`;