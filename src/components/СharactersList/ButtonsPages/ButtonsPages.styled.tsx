import styled from "styled-components";
import { fromDesktopScreenForElements } from "../../../mediaQuery";

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
  transition: background-color 0.3s ease, border 0.3s ease;

    &:hover,
    &:focus {
      border: 1px solid var(--orange);
      background-color: var(--orange-opacity);
    }
    &:disabled {
      display: none;
    };
`;