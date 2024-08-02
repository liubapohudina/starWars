import { Edge, Node } from 'reactflow';
import { Film } from '../types/film';
import { Character } from '../types/character';

// Function to create film nodes
export const createFilmNodes = (films: Film[]): Node[] => {
  return films.map((film: Film, index: number) => ({
    id: `film-${film.id}`,
    type: 'film',
    data: { label: film.title },
    position: { x: 200 + (index % 3) * 250, y: 100 + Math.floor(index / 3) * 150 }
  }));
};

// Function to create edges between the character and films
export const createFilmEdges = (films: Film[], characterId: number): Edge[] => {
  return films.map((film: Film) => ({
    id: `edge-${characterId}-${film.id}`,
    source: `hero-${characterId}`,
    target: `film-${film.id}`,
    type: 'smoothstep',
  }));
};

// Function to create the character node
export const createCharacterNode = (character: Character): Node => ({
  id: `hero-${character.id}`,
  type: 'character', // specify custom type
  data: { label: character.name },
  position: { x: 250, y: 5 }
});

