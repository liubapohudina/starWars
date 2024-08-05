import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterItem } from './CharactersItem';

// Mock character data
const mockCharacter = {
  id: 1,
  name: 'Luke Skywalker',
};


describe('CharacterItem', () => {

  it('should call handleHeroClickProps with correct arguments when item is clicked', () => {
    const handleHeroClickProps = vi.fn(); // Mock click handler
    render(<CharacterItem character={mockCharacter} handleHeroClickProps={handleHeroClickProps} />);

    // Simulate a click event
    const itemElement = screen.getByTestId('btn-card-element-1');
    fireEvent.click(itemElement);

    // Verify if handleHeroClickProps was called with the correct arguments
    expect(handleHeroClickProps).toHaveBeenCalledWith(mockCharacter.id, mockCharacter.name);
  });
});
