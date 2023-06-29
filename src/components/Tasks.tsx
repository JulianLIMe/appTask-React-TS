import React from "react";
import CardTask from "./CardTask";
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
        return <CardTask key={index} task={e} deleteTask={deleteTask} />;
      })}
    </div>
  );
};

export default Tasks;
