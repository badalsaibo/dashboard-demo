import React from 'react';

import { ReactComponent as CheckboxIcon } from '../../icons/check-circle.svg';
import { ReactComponent as ViewMoreIcon } from '../../icons/ellipsis-h.svg';

import { ReactComponent as UserIcon } from '../../icons/user.svg';

import './Task.css';

const Task = ({ data: { completed, title, assignee, dueDate } }) => {
  return (
    <div className={completed ? 'task completed' : 'task'}>
      Hello from task!
      <div className="task__checkbox">
        {completed ? (
          <div className="task__checkbox-ticked">
            <CheckboxIcon width="30" />
          </div>
        ) : (
          <div className="task__checkbox-empty"></div>
        )}
      </div>
      <div className="task__title">{title}</div>
      <div className="task__assignee">
        <UserIcon width="36" />
      </div>
      <div className="task__due-date">{dueDate}</div>
      <div className="task__view-more">
        <ViewMoreIcon width="32" />
      </div>
    </div>
  );
};

export default Task;
