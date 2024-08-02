import React, { useState, useEffect } from 'react';
import ReactFlow, { MiniMap, Controls, Background, Edge, Node, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import { fetchFilmsForCharacterById } from '../../services/api';
import { Character } from '../../types/character';
import { GraphBox } from './CharacterGraoh.styled';
import { Loader } from '../Loader/Loader';
import { Film } from '../../types/film';
import { ApiResponse } from '../../types/apiResponse';
import CustomNodeCharacter from './CustomNode/CustumNodeCharacter';
import CustomNodeFilm from './CustomNode/CustomNodeFilm';
import { createFilmNodes, createCharacterNode, createFilmEdges } from '../../helpers/createNodes';

interface CharacterGraphProps {
  selectedCharacter: Character | null;
}

// custom node types
const nodeTypes: NodeTypes = {
  character: CustomNodeCharacter,
  film: CustomNodeFilm
};

const CharacterGraph: React.FC<CharacterGraphProps> = ({ selectedCharacter }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCharacter) {
      fetchCharacterDetails(selectedCharacter.id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCharacter]); // no other dependencies are needed here

  const fetchCharacterDetails = async (id: number) => {
    setLoading(true);
    try {
      const characterFilms: ApiResponse<Film> = await fetchFilmsForCharacterById(id); // get all films
      
      const filmNodes = createFilmNodes(characterFilms.results);
      const filmEdges = createFilmEdges(characterFilms.results, id);
  
      if (selectedCharacter) { // is selectedCharacter is not null call the function
        const characterNode = createCharacterNode(selectedCharacter);
        setNodes([characterNode, ...filmNodes]); 
      } else {
        return; // if selectedCharacter is null return 
      }
      
      setEdges(filmEdges);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <GraphBox>
      {loading && <Loader />}
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </GraphBox>
  );
};

export default CharacterGraph;



