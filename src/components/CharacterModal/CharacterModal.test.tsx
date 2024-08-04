import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterModal from './CharacterModal';
import { Character } from '../../types/character';

// mock graph for testing modal
vi.mock('../CharacterGraph/CharacterGraph.tsx', () => ({
  __esModule: true,
  default: vi.fn(() => <div>CharacterGraph Component</div>),
}));

describe('CharacterModal', () => {

  it('should not render modal when isOpen is false', () => {
    render(<CharacterModal isOpen={false} onRequestClose={() => {}} selectedCharacter={null} />);
    
    // checking for the modal window doesn`t render
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render modal when isOpen is true', () => {
    const onRequestClose = vi.fn(); // mock function

    // checking for the modal window renders
    const { rerender } = render(
      <CharacterModal
        isOpen={true}
        onRequestClose={onRequestClose}
        selectedCharacter={null}
      />
    );

    // find button close
    const closeButton = screen.getByRole('button');

    // click on the button close
    fireEvent.click(closeButton);

    // checking for the function was called
    expect(onRequestClose).toHaveBeenCalled();

    // after click on the button close the modal should be close
    rerender(
      <CharacterModal
        isOpen={false}
        onRequestClose={onRequestClose}
        selectedCharacter={null}
      />
    );

    // checking for the modal doesn`t render
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should not render graph when selectedCharacter is null', () => {
    render(<CharacterModal
      isOpen={true}
      onRequestClose={() => {}}
      selectedCharacter={null}
    />);
    expect(screen.queryByText('CharacterGraph Component')).not.toBeInTheDocument();
    // checking for the message about info not found should be displays on the screen
    expect(screen.getByText('No information found')).toBeInTheDocument();
  });
  
  it('should render graph when selectedCharacter is not null', () => {
    // mock data character
    const mockCharacter: Character = {
      name: 'Luke Skywalker',
      id: 2,
    };
    
   render(<CharacterModal
    isOpen={true}
    onRequestClose={() => {}}
    selectedCharacter={mockCharacter}
  />);
   
  // checking for the graph renders
  expect(screen.getByText('CharacterGraph Component')).toBeInTheDocument();
  // and also checking for the message about info not found should not be displays on the screen
  expect(screen.queryByText('No information found')).not.toBeInTheDocument();
   })
});
