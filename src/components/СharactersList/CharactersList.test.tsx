import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { CharactersList } from './СharactersList';
import { fetchAllCharacters } from '../../services/api';
import { ApiResponse } from '../../types/apiResponse';
import { Character } from '../../types/character';

// mock data
const mockCharacters: Character[] = [
  { id: 1, name: 'Character One' },
  { id: 2, name: 'Character Two' }
];

// mock response
const mockApiResponse: ApiResponse<Character> = {
  count: 2,
  next: 'nextPageUrl',
  previous: 'prevPageUrl',
  results: mockCharacters
};

//mock functions for fetch data
vi.mock('../../services/api.ts');


describe('CharactersList', () => {
  beforeEach(() => {
    // update mock function before each test
    vi.mocked(fetchAllCharacters).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve(mockApiResponse), 100)) // imitation process loading
    );
  });

  afterEach(() => {
    // restore mock function
    vi.mocked(fetchAllCharacters).mockRestore();
  });

  it('should display a loading indicator when retrieving data', () => {
    render(<CharactersList />);
    //checking for header of list render
    expect(screen.getAllByText('List of characters'));
    // checking for the loader is display on the screen
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render characters correctly', async () => {
    render(<CharactersList />);
    
    //checking for header of list render
    expect(screen.getAllByText('List of characters'));
    //checking for mock data render on the screen
    expect(await screen.findByText('Character One')).toBeInTheDocument();
    expect(await screen.findByText('Character Two')).toBeInTheDocument();
    // checking for loader doesn`t render
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    //checking for that the number of rendered elements is equal to the length of mockCharacters
    const characterElements = screen.getAllByText(/Character/);
    expect(characterElements).toHaveLength(mockCharacters.length);
  });
});