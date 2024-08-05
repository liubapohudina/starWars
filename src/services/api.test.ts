import sinon from 'sinon';
import axios from 'axios';
import { describe, it, expect, afterEach } from 'vitest';
import { fetchAllCharacters, fetchFilmsForCharacterById, fetchStarshipsInFilmForCharacter } from '../services/api';

// mock axios
const axiosStub = sinon.stub(axios, 'get');

describe('API functions', () => {
  afterEach(() => {   // restore all Sinon mocks, stubs, and spies after each test
    sinon.restore();
  });

  it('should fetch all characters', async () => {
    axiosStub.resolves({ data: { results: [{ id: 1, name: 'Jek Tono Porkins' }, { id: 2, name: 'Yoda' } ] } }); // configure the axios stub to resolve with a mock response

    const data = await fetchAllCharacters(); // call function
    // checking for data is valid
    expect(data.results).toEqual([
      { id: 1, name: 'Jek Tono Porkins' },
      { id: 2, name: 'Yoda' }
    ]);
    expect(data.results).not.toEqual([
      { id: 1, name: 'Jek Tono Porkins' }
    ]);
  });

  it('should fetch films for a character', async () => {
    axiosStub.resolves({ data: { results: [{ id: 1, title: 'A New Hope' }] } }); // configure the axios stub to resolve with a mock response

    const data = await fetchFilmsForCharacterById(1); //call function
    // cheking for films response is valid
    expect(data.results[0].title).toBe('A New Hope'); // film for character id: 1
    expect(data.results[0].title).not.toBe('Return of the Jedi'); // film for character id: 2
  });

  it('should fetch starships in a film for a character', async () => {
    // check for if the character was as a pilot in the films
    axiosStub.resolves({ data: { results: [{ id: 1, name: 'X-wing' }] } }); // configure the axios stub to resolve with a mock response

    const data = await fetchStarshipsInFilmForCharacter(1, 1); // call function
    expect(data.results[0].name).toBe('X-wing');
    
    // check for if the character was not as a pilot in the films
    axiosStub.resolves({ data: { results: [] } }); // configure the axios stub to resolve with a mock response
    const dataNotHaveAnyShips = await fetchStarshipsInFilmForCharacter(2, 1); // call function
    expect(dataNotHaveAnyShips.results).toHaveLength(0); // result should be  empty if the character doesn`t have role as pilots

  });
});
