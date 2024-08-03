import styled from "styled-components";
import { smallMobileScreenForElements } from "../../../mediaQuery";

export const Img = styled.img`
  ${smallMobileScreenForElements`
    max-width: 230px;
  `};
  border-radius: 3%;
  max-width: 280px;  
`;

export const CharacterName = styled.p`
    letter-spacing: 0.02rem;
    font-size: 24px;
    font-weight: var(--medium);
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 20%; 
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--dark-opacity);
  color: var(--grey);
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
`;

export const BtnItem = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 20px;
  background-color: var(--dark-opacity);
  border: 1px solid var(--grey);
  border-radius: 3%;
  transition: background-color 0.3s ease, border 0.3s ease, scale 0.3s ease;

    &:hover,
    &:focus {
      border: 1px solid var(--orange);
      background-color: var(--orange-opacity);
      scale: 1.06;
    }

    &:hover ${Tooltip}, &:focus ${Tooltip} {
    opacity: 1;
  }  
`;
