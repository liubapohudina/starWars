import React from "react";
import { ButtonsList, BtnPages } from "./ButtonsPages.styled";
import icons from '../../../assets/icons/symbol-defs.svg';

type ButtonsPagesProps = {
  handlePrev: () => void;
  handleNext: () => void;
  prevPage: string | null;
  nextPage: string | null;
};

export const ButtonsPages:React.FC<ButtonsPagesProps> = ({handlePrev, handleNext, prevPage, nextPage}) => {
  return (
    <ButtonsList>
      <li>
       <BtnPages onClick={handlePrev} disabled={!prevPage}>
              <svg width={42} height={42}>
                <use href={`${icons}#icon-arrow-left2`}></use>
              </svg>
       </BtnPages>
      </li>
      <li> 
        <BtnPages onClick={handleNext} disabled={!nextPage}>
              <svg width={42} height={42}>
                <use href={`${icons}#icon-arrow-right2`}></use>
              </svg>
        </BtnPages>
      </li>  
    </ButtonsList>
  )
}