import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { CharactersList } from './СharactersList';
import { fetchAllCharacters } from '../../services/api';
import { ApiResponse } from '../../types/apiResponse';
import { Character } from '../../types/character';


// mock data
export const mockCharacters: Character[] = [
  { id: 1, name: 'Character One' },
  { id: 2, name: 'Character Two' }
];

// mock response
export const mockApiResponse: ApiResponse<Character> = {
  count: 2,
  next: 'nextPageUrl',
  previous: 'prevPageUrl',
  results: mockCharacters
};

//mock the API functions
vi.mock('../../services/api.ts');

// mock CharacterGraph
vi.mock('../CharacterGraph/CharacterGraph', () => ({
  __esModule: true,
  default: () => <div>Mock CharacterGraph</div>
}));


describe('CharactersList', () => {
  // Mock window.alert
  beforeAll(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });
  beforeEach(() => {
    // update mock function before each test
    vi.mocked(fetchAllCharacters).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve(mockApiResponse), 100)) // simulate process loading
    );
  });

  afterEach(() => {
    // restore mock function
    vi.mocked(fetchAllCharacters).mockRestore();
  });
  afterAll(() => {
    vi.restoreAllMocks();
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

  it('should handle next page navigation', async () => {
    render(<CharactersList />);
    expect( await screen.findByText('Character One')).toBeInTheDocument();
    
    // Click on next button
    fireEvent.click(screen.getByLabelText('Next'));
    
    // // Verify that fetchData is called with the correct URL for the next page
    expect(fetchAllCharacters).toHaveBeenCalledWith('nextPageUrl');
  });

  it('should handle previuos page navigation', async () => {
    render(<CharactersList />);
    expect( await screen.findByText('Character One')).toBeInTheDocument();
    
    // Click on next button
    fireEvent.click(screen.getByLabelText('Previous'));
    
    // // Verify that fetchData is called with the correct URL for the previous page
    expect(fetchAllCharacters).toHaveBeenCalledWith('prevPageUrl');
  });

  it('should open and close modal when character is clicked', async () => {
    render(<CharactersList />);
    expect(await screen.findByText('Character One')).toBeInTheDocument();
     // checking for all lists (async test)
     const lists = await screen.findAllByRole('list');
     expect(lists.length).toBeGreaterThan(0);
    
    // Click on a character to open the modal
      fireEvent.click(screen.getByTestId('btn-card-element-1'));
    
    // Verify modal is open with the correct character data
    const modalPortal = document.querySelector('.ReactModalPortal');
    expect(modalPortal).not.toBeEmptyDOMElement(); // checking for real modal is open
    expect(screen.getByText('Mock CharacterGraph')).toBeInTheDocument(); // cheking for correct data and mock modal is opne too
    
    // Close the modal
    fireEvent.click(screen.getByLabelText('close'));
    
    // Verify modal is closed
    expect(screen.queryByText('Mock CharacterGraph')).not.toBeInTheDocument();// cheking for mock modal is close
    expect(modalPortal).toBeEmptyDOMElement(); // checking for real modal is close
  });

  it('should handle errors and call alert with the error message', async () => {
    // mock fetchAllCharacters for simulate error
    vi.mock('../../services/api.ts', () => ({
    fetchAllCharacters: vi.fn(() => Promise.reject(new Error('Fetch failed')))
    }));

    render(<CharactersList />);
    
    // should be a error message
    expect(screen.findByText('Fetch failed'));
  });
});