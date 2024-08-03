import React from 'react';
import { EdgeProps, getSimpleBezierPath } from 'reactflow';
import styled from 'styled-components';

// Styling component for edge path
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

// Component for connections between characters and films
const CharacterToFilmEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSimpleBezierPath({ sourceX, sourceY, targetX, targetY });
  return <StyledPath id={id} d={edgePath} color="#F97300" style={style as React.CSSProperties} />;
};

// Component for connections between films and starships
const FilmToStarshipEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSimpleBezierPath({ sourceX, sourceY, targetX, targetY });
  return <StyledPath id={id} d={edgePath} color="#003285" style={style as React.CSSProperties} />;
};

export { CharacterToFilmEdge, FilmToStarshipEdge };
