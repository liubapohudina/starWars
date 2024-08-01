import React from "react";
import { Character } from "../СharactersList";
import { Img, CharacterName, Item } from "./CharactersItem.styled";
import defaultPhoto from '../../../assets/person.png';

interface CharacterProps {
  character : Character
}

const PATHTOIMG = 'https://starwars-visualguide.com/assets/img/characters/';

export const CharacterItem: React.FC<CharacterProps> = ({character}) => {
  const imageUrl = `${PATHTOIMG}${character.id}.jpg`;

  return (
    <Item>
        <CharacterName>{character.name}</CharacterName>
        <Img src={imageUrl ? imageUrl : defaultPhoto} alt={character.name}></Img>
    </Item>
  )
};