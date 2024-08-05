import React from 'react';
import { getSimpleBezierPath } from 'reactflow';
import styled from 'styled-components';

// Styled component for SVG path
const StyledPath = styled.path<{ color?: string; strokeWidth?: number }>`
  stroke: ${({ color }) => color || '#222'};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 2}px;
  fill: none;
  transition: stroke-width 0.2s ease;

  &:hover {
    stroke-width: 4px;
  }

  &:active {
    stroke-width: 4px;
  }
`;

// Props for custom edge components
interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  style?: React.CSSProperties;
}

// CharacterToFilmEdge component
const CharacterToFilmEdge: React.FC<CustomEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSimpleBezierPath({ sourceX, sourceY, targetX, targetY });
  return (
    <StyledPath
      id={id}
      d={edgePath}
      data-testid="character-to-film-path"
      color="#F97300"
      style={style}
    />
  );
};

// FilmToStarshipEdge component
const FilmToStarshipEdge: React.FC<CustomEdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSimpleBezierPath({ sourceX, sourceY, targetX, targetY });
  return (
    <StyledPath
      id={id}
      d={edgePath}
      data-testid="film-to-starship-path"
      color="#003285"
      style={style}
    />
  );
};

export { CharacterToFilmEdge, FilmToStarshipEdge };


