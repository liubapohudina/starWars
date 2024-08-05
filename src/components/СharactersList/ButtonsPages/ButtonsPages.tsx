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
       <BtnPages onClick={handlePrev} disabled={!prevPage} data-testid='create-btn-navigate' aria-label="Previous">
        <BtnSvg/>
       </BtnPages>
      </li>
      <li key={2} data-testid='create-item-navigate'> 
        <BtnPages onClick={handleNext} disabled={!nextPage} aria-label="Next">
          <BtnSvgRight/>
        </BtnPages>
      </li>  
    </ButtonsList>
  )
}