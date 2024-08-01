import { css, Interpolation } from "styled-components";
//=========================================================================================== Value//

type StylesType = Interpolation<any>;

//For side indents
const mobile = css`
  padding-left: 16px;
  padding-right: 16px;
`;
const tablet = css`
  padding-right: 40px;
  padding-left: 40px;
`;
const desktop = css`
  padding-right: 80px;
  padding-left: 80px;
`;
//============================================================================================ MediaQuery//

export const smallMobileScreen = css`
  @media (min-width: 320px) and (max-width: 374.98px) {
    ${mobile}
  }
`;
export const smallMobileScreenForElements = (styles: StylesType) => css`
  @media (min-width: 320px) and (max-width: 374.98px) {
    ${styles}
  }
`;
export const mobileScrenn = css`
  @media (min-width: 375px) and (max-width: 767.98px) {
    ${mobile}
  }
`;
export const mobileScrennForElements = (styles: StylesType) => css`
  @media (min-width: 375px) and (max-width: 767.98px) {
    ${styles}
  }
`;
export const fromMobileScrennForElements = (styles: StylesType) => css`
  @media (min-width: 375px) {
    ${styles}
  }
`;
export const tabletScreen = css`
  @media (min-width: 768px) and (max-width: 1023.98px) {
    ${tablet}
  }
`;
export const tabletScreenForElements = (styles: StylesType) => css`
  @media (min-width: 768px) and (max-width: 1439.98px) {
    ${styles}
  }
`;
export const fromTabletScreenForElements = (styles: StylesType) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;

export const desktopScreen = css`
  @media (min-width: 768px) and (max-width: 1439.98px) {
    ${desktop}
  }
`;

export const fromDesktopScreenForElements = (styles: StylesType) => css`
  @media (min-width: 1440px) {
    ${styles}
  }
`;

export const container = css`
  ${smallMobileScreen}
  ${mobileScrenn}
  ${tabletScreen}`
 ;
