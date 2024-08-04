import styled from "styled-components";
import { fromTabletScreenForElements, fromDesktopScreenForElements } from "../../mediaQuery";
import { Background, BackgroundProps, MiniMap, MiniMapProps } from "reactflow";
import bg from '../../assets/bg.jpg';

export const GraphBox = styled.div`
  background-color: var(--vintage);
  height: 80vh;
  width: 300px;
  ${fromTabletScreenForElements`
    width: 700px;
  `};
  ${fromDesktopScreenForElements`
    width: 1000px;
  `};
`;

// Use type assertion to define the type of CustomBackground
export const CustomBackground = styled(Background)<BackgroundProps>`
  background-image:  url(${bg});
` as unknown as typeof Background;

export const CustomMinimap = styled(MiniMap)<MiniMapProps>`
  background-image:  url(${bg});
`as unknown as typeof MiniMap;
