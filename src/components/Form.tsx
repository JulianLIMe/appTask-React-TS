import React, { useState } from "react";
import { ITask } from "../type";
import "../styles/Form.css";

interface FormProps {
  addTask: (task: ITask) => void;
}

const INITIAL_STATE = {
  title: "",
  description: "",
  intensity: 1,
};

const Form = ({ addTask }: FormProps) => {
  const [newTask, setNewTask] = useState<ITask>(INITIAL_STATE);

  const handleChange = (
    evt: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewTask({
      ...newTask,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addTask(newTask);
    setNewTask(INITIAL_STATE);
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Title"
          value={newTask.title}
          name={"title"}
          onChange={handleChange}
        />
        <textarea
          required
          name="description"
          rows={2}
          maxLength={175}
          placeholder="description"
          value={newTask.description}
          onChange={handleChange}
        ></textarea>

        <div className="intensity">
          <label>Intensity</label>
          <select
            name="intensity"
            id="intensity"
            onChange={handleChange}
            value={newTask.intensity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default Form;
