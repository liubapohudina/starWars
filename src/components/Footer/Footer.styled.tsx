import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { container, mobileScrennForElements, fromTabletScreenForElements } from "../../mediaQuery";

export const FooterStyled = styled.footer`
  ${container};
  padding-bottom: 30px;
`;

export const FooterText = styled.p`
  margin-bottom: 15px;
  ${mobileScrennForElements`
    font-size: 22px;
  `};
  ${fromTabletScreenForElements`
    font-size: 36px;
  `};
`;

export const FooterSvg = styled(AiFillGithub)`
  width: 32px;
  height: 32px;
  ${mobileScrennForElements`
    width: 46px;
    height: 46px;
  `};
  ${fromTabletScreenForElements`
    width: 58px;
    height: 58px;
  `};
`;