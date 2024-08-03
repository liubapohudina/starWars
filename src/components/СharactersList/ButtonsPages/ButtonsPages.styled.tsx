import styled from "styled-components";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { fromDesktopScreenForElements } from "../../../mediaQuery";

export const BtnSvg = styled(GoArrowLeft)`
 width: 42px;
 height: 42px;
`;

export const BtnSvgRight = styled(GoArrowRight)`
  width: 42px;
  height: 42px;
`;

export const ButtonsList = styled.ul`
  display: flex; 
  gap: 5px;
  margin-bottom: 50px;
  width: 60%;
  justify-content: space-between;
  ${fromDesktopScreenForElements`
    width: 40%;
  `};
`;

export const BtnPages = styled.button`
  font-family: var(--primary-font);
  padding: 5px;
  background-color: var(--dark-opacity);
  border: 1px solid var(--grey);
  border-radius: 18%;
  transition: background-color 0.3s ease, border 0.3s ease, scale 0.3s ease;

    &:hover,
    &:focus {
      border: 1px solid var(--orange);
      background-color: var(--orange-opacity);
      scale: 1.06;
    }
    &:disabled {
      display: none;
    };
`;