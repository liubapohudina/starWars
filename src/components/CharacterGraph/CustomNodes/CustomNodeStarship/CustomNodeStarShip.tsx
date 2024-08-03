import React from 'react';
import { Handle, Position } from 'reactflow';
import { BoxLabel, HeaderBox, Label } from './CustomNodeStarship.styled';

interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeStarship: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <BoxLabel>
      <HeaderBox>
        Starship
      </HeaderBox>
      <Label>{data.label}</Label> 
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </BoxLabel>
  );
};

export default CustomNodeStarship;