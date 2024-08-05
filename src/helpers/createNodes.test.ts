import { describe, it, expect } from 'vitest';
import { createCharacterNode, createFilmNodes, createFilmEdges, createStarshipNodes, createStarshipEdges } from './createNodes';
import { Character } from '../types/character';
import { Film } from '../types/film';
import { Starship } from '../types/starship';

describe('createNodes functions', () => {
  it('should create a character node', () => {
    const mockCharacter: Character = { id: 1, name: 'Mock Character' }; // mock data character
    const characterNode = createCharacterNode(mockCharacter); // call function createCharacterNode

    expect(characterNode).toEqual({
      id: 'hero-1',
      type: 'character',
      data: { label: 'Mock Character' },
      position: { x: 400, y: 5 },
    });
  });

  it('should create film nodes', () => {
    const mockFilms: Film[] = [         // mock data films
      { id: 1, title: 'Mock Film 1' },
      { id: 2, title: 'Mock Film 2' },
    ];
    const filmNodes = createFilmNodes(mockFilms); // call function createFilmNodes

    expect(filmNodes).toEqual([
      {
        id: 'film-1',
        type: 'film',
        data: { label: 'Mock Film 1' },
        position: { x: 200, y: 200 },
      },
      {
        id: 'film-2',
        type: 'film',
        data: { label: 'Mock Film 2' },
        position: { x: 450, y: 200 },
      },
    ]);
  });

  it('should create film edges', () => {
    const mockFilms: Film[] = [         //mock data edges
      { id: 1, title: 'Mock Film 1' },
      { id: 2, title: 'Mock Film 2' },
    ];
    const characterId = 1;   // props characterId: number
    const filmEdges = createFilmEdges(mockFilms, characterId); // call function createFilmEdges
    
    // check the films edges is valid
    expect(filmEdges).toEqual([
      {
        id: 'edge-1-1',
        source: 'hero-1',
        target: 'film-1',
        type: 'characterToFilm',
      },
      {
        id: 'edge-1-2',
        source: 'hero-1',
        target: 'film-2',
        type: 'characterToFilm',
      },
    ]);
    // сhecking that the connections match the corresponding character
    expect(filmEdges).not.toEqual([
      {
        id: 'edge-1-1',
        source: 'hero-2',
        target: 'film-1',
        type: 'characterToFilm',
      },
      {
        id: 'edge-1-2',
        source: 'hero-2',
        target: 'film-2',
        type: 'characterToFilm',
      },
    ]);
  });
  it('should create starship nodes', () => {
    const mockStarships: Starship[] = [
      { id: 1, name: 'Mock Starship 1' },
      { id: 2, name: 'Mock Starship 2' },
    ];
    const filmIndex = 0; // props filmIndex: number
    const starshipNodes = createStarshipNodes(mockStarships, filmIndex); // call function createStarshipNodes
  
    expect(starshipNodes).toEqual([
      {
        id: 'starship-1',
        type: 'starship',
        data: { label: 'Mock Starship 1' },
        position: { x: 250, y: 300 }, // updated expected y value
      },
      {
        id: 'starship-2',
        type: 'starship',
        data: { label: 'Mock Starship 2' },
        position: { x: 500, y: 300 }, // updated expected y value
      },
    ]);
  });

  it('should create starship edges', () => {
    const mockStarships: Starship[] = [     // mock data starship
      { id: 1, name: 'Mock Starship 1' },
      { id: 2, name: 'Mock Starship 2' },
    ];
    const filmId = 1;  // props filmId: number
    const starshipEdges = createStarshipEdges(mockStarships, filmId);
    
    // check the starships edges is valid
    expect(starshipEdges).toEqual([
      {
        id: 'edge-film-1-starship-1',
        source: 'film-1',
        target: 'starship-1',
        type: 'filmToStarship',
      },
      {
        id: 'edge-film-1-starship-2',
        source: 'film-1',
        target: 'starship-2',
        type: 'filmToStarship',
      },
    ]);
    // сhecking that the connections match the corresponding character
    expect(starshipEdges).not.toEqual([
      {
        id: 'edge-film-1-starship-1',
        source: 'film-2',
        target: 'starship-1',
        type: 'filmToStarship',
      },
      {
        id: 'edge-film-1-starship-2',
        source: 'film-2',
        target: 'starship-2',
        type: 'filmToStarship',
      },
    ]);
  });
});
