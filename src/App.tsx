import React, { useState } from "react";
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
    const newTasks: ITask[] = [];
    copy.map((e) => e != task && newTasks.push(e));
    setTasks(newTasks);
  };

  return (
    <div className="container-app">
      <Form addTask={addTask} />
      <Tasks allTasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
