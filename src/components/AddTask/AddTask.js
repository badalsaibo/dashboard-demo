import React from 'react';

import { ReactComponent as CloseIcon } from '../../icons/times.svg';
import { ReactComponent as UploadIcon } from '../../icons/upload.svg';

import './AddTask.css';

const AddTask = () => {
  return (
    <div className="add-task">
      <div className="menu-bar">
        <h3 className="menu-bar__heading">new task</h3>
        <div className="menu-bar__icon">
          <CloseIcon width="20" />
        </div>
      </div>
      <form className="input-form">
        <input
          type="text"
          id="task-name"
          className="input-form__task-name"
          placeholder="task name"
        />
        <textarea
          rows="5"
          type="text"
          id="task-description"
          className="input-form__task-description"
          placeholder="task description"
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

        <button type="submit" className="primary-button">
          add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
