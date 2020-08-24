import React from 'react';

import './TaskContainer.css';

const TaskContainer = ({ children }) => {
  return (
    <div className="task-container">
      <h2 className="task-container__header-title">title</h2>
      <h2 className="task-container__header-assignee">assignee</h2>
      <h2 className="task-container__header-due-date ">date</h2>
      {children}
    </div>
  );
};

export default TaskContainer;
