import React from 'react';
import { Handle, Position } from 'reactflow';
import { BoxLabel, Label } from './CustomNodeCharacter.styled';

interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeCharacter: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <BoxLabel>
      <Label>{data.label}</Label> 
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </BoxLabel>
  );
};

export default CustomNodeCharacter;
