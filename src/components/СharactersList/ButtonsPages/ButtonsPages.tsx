import React from "react";
import { ButtonsList, BtnPages, BtnSvg, BtnSvgRight } from "./ButtonsPages.styled";

type ButtonsPagesProps = {
  handlePrev: () => void;
  handleNext: () => void;
  prevPage: string | null;
  nextPage: string | null;
};

export const ButtonsPages:React.FC<ButtonsPagesProps> = ({handlePrev, handleNext, prevPage, nextPage}) => {
  return (
    <ButtonsList>
      <li key={1}>
       <BtnPages onClick={handlePrev} disabled={!prevPage}>
        <BtnSvg/>
       </BtnPages>
      </li>
      <li key={2} data-testid='create-btn-footer'> 
        <BtnPages onClick={handleNext} disabled={!nextPage}>
          <BtnSvgRight/>
        </BtnPages>
      </li>  
    </ButtonsList>
  )
}