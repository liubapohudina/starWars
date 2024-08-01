import React from 'react';
import logo from '../../assets/logo.webp';
import { HeaderStyled, Img } from './Header.styled';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Img src={`${logo}`} alt="Logo star wasrs"></Img>
    </HeaderStyled>
  )
}