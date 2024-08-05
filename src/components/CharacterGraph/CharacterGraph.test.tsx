import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import CharacterGraph from './CharacterGraph';
import { Character } from '../../types/character';
import { ApiResponse } from '../../types/apiResponse';
import { Film } from '../../types/film';
import { Starship } from '../../types/starship';
import { fetchFilmsForCharacterById, fetchStarshipsInFilmForCharacter } from '../../services/api';

// Mock API responses
const mockCharacter: Character = { id: 1, name: 'Mock Character' };
const mockCharacterFilmsResponse: ApiResponse<Film> = {
  count: 1,
  next: null,
  previous: null,
  results: [{ id: 1, title: 'Mock Film' }, { id: 2, title: 'Mock Film 2' }]
};
const mockStarshipsResponse: ApiResponse<Starship> = {
  count: 1,
  next: null,
  previous: null,
  results: [{ id: 1, name: 'Mock Starship' }]
};

// Mock the API functions
vi.mock('../../services/api', () => ({
  fetchFilmsForCharacterById: vi.fn(() => Promise.resolve(mockCharacterFilmsResponse)),
  fetchStarshipsInFilmForCharacter: vi.fn(() => Promise.resolve(mockStarshipsResponse))
}));

describe('CharacterGraph', () => {
  // Mock window.alert
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore all mock functions
    vi.restoreAllMocks();
  });

  it('should call fetchCharacterDetails when selectedCharacter changes', async () => {
    // render the component with the selected character
    render(<CharacterGraph selectedCharacter={mockCharacter} />);
    
    // checking for the loader is display on the screen
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    // wait for async operations to complete
    await waitFor(() => {
      expect(vi.mocked(fetchFilmsForCharacterById)).toHaveBeenCalledWith(mockCharacter.id);
      // Check that fetchStarshipsInFilmForCharacter was called for each film
      mockCharacterFilmsResponse.results.forEach(film => {
        expect(vi.mocked(fetchStarshipsInFilmForCharacter)).toHaveBeenCalledWith(mockCharacter.id, film.id);
      });
    });

    // checking for loader doesn't render
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    // checking for the state changes, nodes, and edges if applicable
    expect(screen.getByText('Mock Character')).toBeInTheDocument();
    expect(screen.getByText('Mock Film')).toBeInTheDocument();
    expect(screen.getByText('Mock Starship')).toBeInTheDocument();
    expect(screen.getByText('Mock Film 2')).toBeInTheDocument();
    expect(screen.queryByText('Mock Starship 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Mock Film 3')).not.toBeInTheDocument();

    // Checking for rendered elements
    const characterElements = screen.getAllByText(/Character/);
    expect(characterElements).toHaveLength(1);

    const filmElements = screen.getAllByText(/Mock Film/);
    expect(filmElements).toHaveLength(mockCharacterFilmsResponse.results.length);

    const shipElements = screen.getAllByText(/Mock Starship/);
    expect(shipElements).toHaveLength(mockStarshipsResponse.results.length);
  });

  it('should handle errors and call alert with the error message', async () => {
    // Mock fetchFilmsForCharacterById to reject
    vi.mocked(fetchFilmsForCharacterById).mockImplementation(() =>
      Promise.reject(new Error('Fetch failed'))
    );

    render(<CharacterGraph selectedCharacter={mockCharacter} />);
    
    // Check for the error message
    expect(screen.findByText('Fetch failed'));
  });
});


