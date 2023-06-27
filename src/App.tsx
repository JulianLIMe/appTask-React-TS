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

  /* useEffect(() => {
    const copy = [...tasks];
    copy.sort((a, b) => {
      return b.intensity - a.intensity;
    });
    setTasks(copy);
  }, [tasks]); */

  return (
    <div className="container-app">
      <Form addTask={addTask} />
      <Tasks allTasks={tasks} />
    </div>
  );
}

export default App;
