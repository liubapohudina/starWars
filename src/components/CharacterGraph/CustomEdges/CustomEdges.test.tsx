import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CharacterToFilmEdge, FilmToStarshipEdge } from './CustomEdges';

// mock the getSimpleBezierPath function from 'reactflow' 
vi.mock('reactflow', () => ({
  getSimpleBezierPath: vi.fn(() => ['M10,10 C20,20 30,20 40,10']), // mock implementation that returns a fixed path
}));

describe('Edges Components', () => {
  
  // checking for CharacterToFilmEdge renders correctly
  it('should render CharacterToFilmEdge component without crashing', () => {
    // render the CharacterToFilmEdge component wrapped inside an <svg> element to provide SVG context
    const { container } = render(
      <svg>
        <CharacterToFilmEdge id="1" sourceX={10} sourceY={10} targetX={40} targetY={10} style={{}} />
      </svg>
    );
    
    // query for the <path> element in the rendered output
    const pathElement = container.querySelector('path');
    expect(pathElement).toBeInTheDocument();
    expect(pathElement).toHaveAttribute('d', 'M10,10 C20,20 30,20 40,10');
  });

  // cheking for FilmToStarshipEdge renders correctly
  it('should render FilmToStarshipEdge component without crashing', () => {
    // render the FilmToStarshipEdge component wrapped inside an <svg> element to provide SVG context
    const { container } = render(
      <svg>
        <FilmToStarshipEdge id="2" sourceX={10} sourceY={10} targetX={40} targetY={10} style={{}} />
      </svg>
    );
    
    // query for the <path> element in the rendered output
    const pathElement = container.querySelector('path');
    expect(pathElement).toBeInTheDocument();
    expect(pathElement).toHaveAttribute('d', 'M10,10 C20,20 30,20 40,10');
  });
});


