import React from 'react';
import Modal from 'react-modal';
import CharacterGraph from '../CharacterGraph/CharacterGraph';
import { Character } from '../../types/character';
import { BtnClose, SvgClose } from './CharacterModal.styled';

Modal.setAppElement('#root');

interface CharacterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedCharacter: Character | null;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ isOpen, onRequestClose, selectedCharacter }) => {
  return (
    <Modal
      role="dialog"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Details"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          backgroundColor: '#706A60',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <BtnClose onClick={onRequestClose}>
        <SvgClose/>
      </BtnClose>
      {selectedCharacter ? <CharacterGraph selectedCharacter={selectedCharacter} /> : <p>No information found</p>}
    </Modal>
  );
};

export default CharacterModal;
