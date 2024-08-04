import React from "react";
import { Character } from "../../../types/character";
import { Img, CharacterName, BtnItem, Tooltip } from "./CharactersItem.styled";
import defaultPhoto from '../../../assets/person.png';

interface CharacterProps {
  character : Character,
  handleHeroClickProps:  (id: number, name: string) => void;
}

const PATHTOIMG = 'https://starwars-visualguide.com/assets/img/characters/'; // path for get a character photo

export const CharacterItem: React.FC<CharacterProps> = ({character, handleHeroClickProps}) => {

  const imageUrl = `${PATHTOIMG}${character.id}.jpg`;
 
  return (
    <li key={character.id} data-testid={`card-element-${character.id}`}>
      <BtnItem onClick={() => handleHeroClickProps(character.id, character.name)}>
        <CharacterName>{character.name}</CharacterName>
        <Img src={imageUrl ? imageUrl : defaultPhoto} alt={character.name}></Img>
        <Tooltip>See more details</Tooltip>
      </BtnItem>
    </li>
  )
};