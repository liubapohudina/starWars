import styled from "styled-components";
import { fromTabletScreenForElements } from "../../../mediaQuery";

export const Img = styled.img`
    max-width: 300px;
    border-radius: 3%;
    ${fromTabletScreenForElements`
      max-width: 280px;  
    `};
`;

export const CharacterName = styled.p`
    letter-spacing: 0.02rem;
    font-size: 24px;
    font-weight: var(--medium);
`;

export const Item = styled.li`
    // display: flex;
    // flex-direction: column;
    // gap: 5px;
    // cursor: pointer;
    // padding: 20px;
    // background-color: var(--dark-opacity);
    // border: 1px solid var(--grey);
    // border-radius: 3%;
    // transition: background-color 0.3s ease, border 0.3s ease;

    // &:hover,
    // &:focus {
    //   border: 1px solid var(--orange);
    //   background-color: var(--orange-opacity);
    // }
`;

export const BtnItem = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 20px;
  background-color: var(--dark-opacity);
  border: 1px solid var(--grey);
  border-radius: 3%;
  transition: background-color 0.3s ease, border 0.3s ease;

    &:hover,
    &:focus {
      border: 1px solid var(--orange);
      background-color: var(--orange-opacity);
    }
`;