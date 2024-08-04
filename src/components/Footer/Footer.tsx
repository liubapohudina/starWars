import React from "react";
import { FooterStyled, FooterText, FooterSvg } from "./Footer.styled";

export const Footer:React.FC = () => {
  return (
  <FooterStyled>
     <FooterText>I hope that this application will be useful for you</FooterText>
     <a href="https://github.com/liubapohudina/starWars">
        <FooterSvg />
     </a>
  </FooterStyled>
  )
}; 