import React from "react";
import { Character } from "../../../types/character";
import { Img, CharacterName, Item, BtnItem } from "./CharactersItem.styled";
import defaultPhoto from '../../../assets/person.png';

interface CharacterProps {
  character : Character,
  handleHeroClickProps:  (id: number, name: string) => void;
}

const PATHTOIMG = 'https://starwars-visualguide.com/assets/img/characters/';

export const CharacterItem: React.FC<CharacterProps> = ({character, handleHeroClickProps}) => {

  const imageUrl = `${PATHTOIMG}${character.id}.jpg`;

  return (
    <Item key={character.id}>
      <BtnItem onClick={() => handleHeroClickProps(character.id, character.name)}>
        <CharacterName>{character.name}</CharacterName>
        <Img src={imageUrl ? imageUrl : defaultPhoto} alt={character.name}></Img>
      </BtnItem>
    </Item>
  )
};