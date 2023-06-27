import React from "react";
import { ITask } from "../type";

interface TasksProps {
  allTasks: Array<ITask>;
}

const Tasks = ({ allTasks }: TasksProps) => {
  return (
    <div>
      {allTasks.map((e, index) => {
        return (
          <div key={index}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <span>{e.intensity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
