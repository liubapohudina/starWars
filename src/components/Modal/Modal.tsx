import React from 'react';
import Modal from 'react-modal';
import CharacterGraph from '../CharacterGraf/CharacterGraf';
import { Character } from '../../types/character';
import { BtnClose, SvgClose } from './Modal.styled';

Modal.setAppElement('#root');

interface CharacterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedCharacter: Character | null;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ isOpen, onRequestClose, selectedCharacter }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Hero Details"
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
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <BtnClose onClick={onRequestClose}>
        <SvgClose/>
      </BtnClose>
      {selectedCharacter && <CharacterGraph selectedCharacter={selectedCharacter} />}
    </Modal>
  );
};

export default CharacterModal;
