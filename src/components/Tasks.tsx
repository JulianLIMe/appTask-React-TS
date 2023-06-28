import React from "react";
import { ITask } from "../type";
import "../styles/Tasks.css";

interface TasksProps {
  allTasks: Array<ITask>;
  deleteTask: (task: ITask) => void;
}

const Tasks = ({ allTasks, deleteTask }: TasksProps) => {
  return (
    <div className="container-tasks">
      {allTasks.map((e, index) => {
        return (
          <div key={index} className={`card-task intensity${e.intensity}`}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <button onClick={() => deleteTask(e)}>🗑</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
