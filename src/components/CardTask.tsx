import React, { useState } from "react";
import Modal from "./Modal";
import { ITask } from "../type";
import "../styles/CardTask.css";

interface CardProps {
  task: ITask;
  deleteTask: (task: ITask) => void;
}

const CardTask = ({ task, deleteTask }: CardProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    deleteTask(task);
    handleModal();
  };

  return (
    <div>
      <div className={`card-task intensity${task.intensity}`}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={() => handleModal()}>🗑</button>
      </div>
      <Modal
        openModal={openModal}
        handleModal={handleModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CardTask;
