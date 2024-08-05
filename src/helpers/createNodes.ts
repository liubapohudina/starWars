import { Edge, Node } from 'reactflow';
import { Film } from '../types/film';
import { Character } from '../types/character';
import { Starship } from '../types/starship';

// Function to create the character node
export const createCharacterNode = (character: Character): Node => ({
  id: `hero-${character.id}`,
  type: 'character', // specify custom type
  data: { label: character.name },
  position: { x: 400, y: 5 }
});

// Function to create film nodes
export const createFilmNodes = (films: Film[]): Node[] => {
  const filmlengh = films.length;
  return films.map((film: Film, index: number) => ({
    id: `film-${film.id}`,
    type: 'film',
    data: { label: film.title },
    position: { x: 200 + (index % filmlengh) * 250, y: 200}
  }));
};

// Function to create edges between the character and films
export const createFilmEdges = (films: Film[], characterId: number): Edge[] => {
  return films.map((film: Film) => ({
    id: `edge-${characterId}-${film.id}`,
    source: `hero-${characterId}`, // connection with
    target: `film-${film.id}`,
    type: 'characterToFilm', // custom type
  }));
};

// Function to create the starship node
export const createStarshipNodes = (starships: Starship[], filmIndex: number): Node[] => {
  let valueforStyle = 3; // var for styles if film > 3 then the distance between the nodes will be smaller for correct layout
  if(filmIndex > 3) {
    valueforStyle = 1;
  }
  return starships.map((starship, index) => ({
    id: `starship-${starship.id}`,
    type: 'starship', // custom type
    data: { label: starship.name },
    position: { x: 250 + (index % 5) * 250, y: (filmIndex + valueforStyle) * 100 + Math.floor(index / 5) * 150 }
  }));
};

// function to create the starship edge
export const createStarshipEdges = (starships: Starship[], filmId: number): Edge[] =>
  starships.map((starship) => ({
    id: `edge-film-${filmId}-starship-${starship.id}`,
    source: `film-${filmId}`, // connection with
    target: `starship-${starship.id}`,
    type: 'filmToStarship', // custom type
  }));

