import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { ITask } from "./type";
import "./App.css";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    const copy = [...tasks, task];
    copy.sort((a, b) => {
      return b.intensity - a.intensity;
    });
    setTasks(copy);
  };

  const deleteTask = (task: ITask) => {
    const copy = [...tasks];
    const result = copy.filter(
      (e) =>
        e.title != task.title &&
        e.description != task.description &&
        e.intensity != task.intensity
    );
    setTasks(result);
  };

  return (
    <div className="container-app">
      <Form addTask={addTask} />
      <Tasks allTasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
