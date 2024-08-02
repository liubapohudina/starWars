import React from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeCharacter: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5, backgroundColor: '#fff' }}>
      <div style={{ color: 'blue', fontWeight: 'bold' }}>{data.label}</div> 
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CustomNodeCharacter;
