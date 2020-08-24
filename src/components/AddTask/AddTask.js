import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../icons/times.svg';
import { ReactComponent as UploadIcon } from '../../icons/upload.svg';

import './AddTask.css';

const AddTask = ({ handleToggleAddTask, addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === '' || taskDescription === '') {
      alert('Fields cannot be empty!');
      return;
    }
    setTimeout(() => {
      addTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
      setIsAdding(false);
      handleToggleAddTask();
    }, 2000);
    setIsAdding(true);
  };

  return (
    <div className="add-task">
      <div className="menu-bar">
        <h3 className="menu-bar__heading">new task</h3>
        <div className="menu-bar__icon" onClick={handleToggleAddTask}>
          <CloseIcon width="20" />
        </div>
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="task-name"
          className="input-form__task-name"
          placeholder="task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          rows="5"
          type="text"
          id="task-description"
          className="input-form__task-description"
          placeholder="task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <div className="delimeter"></div>

        <input
          type="file"
          id="task-upload"
          className="input-form__task-upload"
        />
        <label for="task-upload" className="input-form__task-upload-label">
          <span className="input-form__task-upload-icon">
            <UploadIcon width="22" />
          </span>
          upload files
        </label>

        <div className="delimeter"></div>

        <button type="submit" className="primary-button" disabled={isAdding}>
          {isAdding ? <span className="spinner"></span> : 'add task'}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
