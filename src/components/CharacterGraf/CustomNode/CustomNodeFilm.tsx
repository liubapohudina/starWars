import React from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
  };
}

const CustomNodeFilm: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div style={{ 
      padding: 10, 
      border: '1px solid #ddd', 
      borderRadius: 5, 
      backgroundColor: '#f0f0f0', 
      textAlign: 'center',
      position: 'relative',
      maxWidth: '150px', // Set a maximum width
      overflow: 'hidden',
      wordWrap: 'break-word' // Ensure long words break and wrap onto the next line
    }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: '#e0e0e0', 
        padding: '5px 0', 
        borderRadius: '5px 5px 0 0', 
        fontWeight: 'bold',
        color: 'black'
      }}>
        Films
      </div>
      <div style={{ marginTop: '30px', color: '#333', wordBreak: 'break-word' }}>{data.label}</div> 
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CustomNodeFilm;


