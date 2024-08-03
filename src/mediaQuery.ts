// this file is created for media rules and one rules for container (const container)

import { css, Interpolation } from "styled-components";
type StylesType = Interpolation<any>; // type for props
//=========================================================================================== Value//

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
  padding-right: 60px;
  padding-left: 60px;
`;
//============================================================================================ MediaQuery//

// this function for styling elements 
export const smallMobileScreenForElements = (styles: StylesType) => css`
  @media (min-width: 320px) and (max-width: 374.98px) {
    ${styles}
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

export const fromDesktopScreenForElements = (styles: StylesType) => css`
  @media (min-width: 1440px) {
    ${styles}
  }
`;

// this variable for create const container
const smallMobileScreen = css`
  @media (min-width: 320px) and (max-width: 374.98px) {
    ${mobile}
  }
`;

const mobileScrenn = css`
  @media (min-width: 375px) and (max-width: 767.98px) {
    ${mobile}
  }
`;

const tabletScreen = css`
  @media (min-width: 768px) and (max-width: 1439.98px) {
    ${tablet}
  }
`;

const desktopScreen = css`
  @media (min-width: 1439.98px) {
    ${desktop}
  }
`;

export const container = css`
  ${smallMobileScreen}
  ${mobileScrenn}
  ${tabletScreen}
  ${desktopScreen}`
 ;
