import React from 'react';
import { EdgeProps, getSmoothStepPath } from 'reactflow';
import styled from 'styled-components';

// styling compomet for scg path
const StyledPath = styled.path<{ color?: string; strokeWidth?: number }>`
  stroke: ${({ color }) => color || '#222'};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 2}px;
  fill: none;

  &:hover {
    stroke-width: 4px;
  }

  &:active {
    stroke-width: 4px;
  }
`;

// component for connections between characters and films
const CharacterToFilmEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY });
  return <StyledPath id={id} d={edgePath} color="#F97300" style={style as React.CSSProperties} />;
};

// сomponent for connections between films and starships
const FilmToStarshipEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
  const [edgePath] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY });
  return <StyledPath id={id} d={edgePath} color="#003285" style={style as React.CSSProperties} />;
};

export { CharacterToFilmEdge, FilmToStarshipEdge };
