import styled from "styled-components";
import { fromTabletScreenForElements, fromDesktopScreenForElements } from "../../mediaQuery";

export const TextH1 = styled.h1`
 font-size: 32px;
 font-weight: var(--semibold);
 letter-spacing: 0.07rem;
 background: linear-gradient(to top right, #ffcc00 0%, #333300 100%);;
 background-size: 200% auto;
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 background-clip: text;
  

 ${fromTabletScreenForElements`
  font-size: 64px;
`};
 ${fromDesktopScreenForElements`
  font-size: 72px;
`};
`;

export const ListCharacters = styled.ul`
  gap: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  ${fromTabletScreenForElements`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;