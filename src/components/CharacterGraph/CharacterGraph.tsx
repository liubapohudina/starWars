import React, { useState, useEffect } from 'react';
import ReactFlow, { MiniMap, Controls, Background, Edge, Node, NodeTypes, EdgeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import { fetchFilmsForCharacterById, fetchStarshipsInFilmForCharacter } from '../../services/api';
// import types
import { Character } from '../../types/character';
import { Film } from '../../types/film';
import { ApiResponse } from '../../types/apiResponse';
import { Starship } from '../../types/starship';
import { GraphBox } from './CharacterGraph.styled';
import { Loader } from '../Loader/Loader';
// import custom styles for nodes
import CustomNodeCharacter from './CustomNodes/CustomNodeCharacter/CustumNodeCharacter';
import CustomNodeFilm from './CustomNodes/CustomNodeFilm/CustomNodeFilm';
import CustomNodeStarship from './CustomNodes/CustomNodeStarship/CustomNodeStarShip';
// import custom edges
import { CharacterToFilmEdge, FilmToStarshipEdge } from './CustomEdges/CustomEdges';
import { createFilmNodes, createCharacterNode, createFilmEdges, createStarshipEdges, createStarshipNodes } from '../../helpers/createNodes';

interface CharacterGraphProps {
  selectedCharacter: Character | null;
}

// custom node types
const nodeTypes: NodeTypes = {
  character: CustomNodeCharacter,
  film: CustomNodeFilm,
  starship: CustomNodeStarship
};

// custom edge types
const edgeTypes: EdgeTypes = {
  characterToFilm: CharacterToFilmEdge,
  filmToStarship: FilmToStarshipEdge
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
      
      // nodes and edges of films
      const filmNodes = createFilmNodes(characterFilms.results); 
      const filmEdges = createFilmEdges(characterFilms.results, id);

      //nodes and edgws of starships
      const starshipNodes: Node[] = [];
      const starshipEdges: Edge[] = [];

    
      for (let i = 0; i < characterFilms.results.length; i++) { //this for getting film index
        const film = characterFilms.results[i];
        const starshipsResponse: ApiResponse<Starship> = await fetchStarshipsInFilmForCharacter(id, film.id); //get all starships
        const starships = starshipsResponse.results;
        //push ship nodes and ship edges to array
        starshipNodes.push(...createStarshipNodes(starships, i)); //i - film index(need for style position the starship node)
        starshipEdges.push(...createStarshipEdges(starships, film.id));
      }
      if (selectedCharacter) { // is selectedCharacter is not null call the function
        const characterNode = createCharacterNode(selectedCharacter);
        setNodes([characterNode, ...filmNodes, ...starshipNodes]);// set all nodes
      } else {
        return; // if selectedCharacter is null return 
      }
      setEdges([...filmEdges, ...starshipEdges]);// set all edges
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <GraphBox>
      {loading && <Loader />}
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes}>
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </GraphBox>
  );
};

export default CharacterGraph;



