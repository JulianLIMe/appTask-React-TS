import React from "react";
import { ITask } from "../type";
import "../styles/CardTask.css";

interface CardProps {
  task: ITask;
  deleteTask: (task: ITask) => void;
}

const CardTask = ({ task, deleteTask }: CardProps) => {
  return (
    <div className={`card-task intensity${task.intensity}`}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task)}>🗑</button>
    </div>
  );
};

export default CardTask;
