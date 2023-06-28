import React, { useState } from "react";
import "../styles/Modal.css";

interface ModalProps {
  openModal: boolean;
}

const Modal = ({ openModal }: ModalProps) => {
  return (
    <div className={`modal ${openModal && "open-modal"}`}>
      <div className="container-modal">
        <button className="close-modal">X</button>
        <p>Do you want to delete this task?</p>
        <button className="acept">Yes, I do</button>
      </div>
    </div>
  );
};

export default Modal;
