import React from 'react';
import { Handle, Position } from 'reactflow';
import { BoxLabel, Label, HeaderBox } from './CustomNodeFilm.styled';

interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeFilm: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <BoxLabel>
      <HeaderBox>
        Film
      </HeaderBox>
      <Label>{data.label}</Label> 
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </BoxLabel>
  );
};

export default CustomNodeFilm;


