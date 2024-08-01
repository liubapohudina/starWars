import React, { useState, useEffect } from "react";
import { CustomSection } from "../CustomSection/CustomSection.styled";
import { TextH1, ListCharacters } from "./CharactersList.styled";
import { Loader } from "../Loader/Loader";
import { CharacterItem } from "./CharactersItem/CharactersItem";
import { ButtonsPages } from "./ButtonsPages/ButtonsPages"; //buttons for navigation
import { fetchAllCharacters } from "../../services/api";

export type Character = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: number[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  id: number;
  mass: string;
  name: string;
  skin_color: string;
  species: number[];
  starships: number[];
  url: string;
  vehicles: number[];
};

type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};

export const Characters: React.FC = () => {
  // State for characters
  const [characters, setCharacters] = useState<Character[]>([]);
  // State for loading process
  const [loading, setLoading] = useState<boolean>(false);
  // State for next and previous page URLs
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  // Function to fetch characters
  const fetchData = async (url?: string) => {
    setLoading(true);
    try {
      const response: ApiResponse = await fetchAllCharacters(url);
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

  return (
    <CustomSection>
      <TextH1>List of characters</TextH1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ListCharacters>
            {characters.map(character => (
              <CharacterItem key={character.id} character={character} />
            ))}
          </ListCharacters>
          <ButtonsPages handlePrev={handlePrev} handleNext={handleNext} prevPage={prevPage} nextPage={nextPage}/>
        </>
      )}
    </CustomSection>
  );
};
