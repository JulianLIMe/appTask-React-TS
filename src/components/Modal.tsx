import React from "react";
import "../styles/Modal.css";

interface ModalProps {
  openModal: boolean;
  handleModal: () => void;
  handleDelete: () => void;
}

const Modal = ({ openModal, handleModal, handleDelete }: ModalProps) => {
  const endPropagation = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation(); // prevents an element from inheriting events from the parent elements
  };

  return (
    <div
      className={`modal ${openModal && "open-modal"}`}
      onClick={() => handleModal()}
    >
      <div className="container-modal" onClick={(evt) => endPropagation(evt)}>
        <button className="close-modal" onClick={() => handleModal()}>
          X
        </button>
        <p>Have you already performed this task?</p>
        <button className="acept" onClick={() => handleDelete()}>
          Yes, I have
        </button>
      </div>
    </div>
  );
};

export default Modal;
