import React, { useState, useEffect } from "react";
import { CustomSection } from "../CustomSection/CustomSection.styled";
import { TextH1, ListCharacters } from "./CharactersList.styled";
import { Loader } from "../Loader/Loader";
import { CharacterItem } from "./CharactersItem/CharactersItem";
import CharacterModal from "../CharacterModal/CharacterModal";
import { ButtonsPages } from "./ButtonsPages/ButtonsPages"; //buttons for navigation
import { fetchAllCharacters } from "../../services/api";
import { Character } from "../../types/character";
import { ApiResponse } from "../../types/apiResponse";

export const CharactersList: React.FC = () => {
  // State for characters
  const [characters, setCharacters] = useState<Character[]>([]);
  // State for loading process
  const [loading, setLoading] = useState<boolean>(false);
  // State for next and previous page URLs
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  // State for modal
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null); 
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // Function to fetch characters
  const fetchData = async (url?: string) => {
    setLoading(true);
    try {
      const response: ApiResponse<Character> = await fetchAllCharacters(url);
      setCharacters(response.results);
      setNextPage(response.next);
      setPrevPage(response.previous);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  // Query to fetch characters on initial render
  useEffect(() => {
    fetchData();
  }, []); 

  // Function for navigating to the next page
  const handleNext = () => {
    if (nextPage) {
      fetchData(nextPage);
    }
  };

  // Function for navigating to the previous page
  const handlePrev = () => {
    if (prevPage) {
      fetchData(prevPage);
    }
  };

  // function for modal
  const handleHeroClick = (id: number, name: string) => {
    setSelectedCharacter({id, name});
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <CustomSection>
      <TextH1>List of characters</TextH1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ListCharacters  role="list">
            {characters.map(character => (
              <CharacterItem  key={character.id} character={character} handleHeroClickProps={handleHeroClick}/>
            ))}
          </ListCharacters>
          <CharacterModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedCharacter={selectedCharacter}
        />
          <ButtonsPages handlePrev={handlePrev} handleNext={handleNext} prevPage={prevPage} nextPage={nextPage}/>
        </>
      )}
    </CustomSection>
  );
};
