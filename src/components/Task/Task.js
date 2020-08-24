import React, { useState } from 'react';

import { ReactComponent as CheckboxIcon } from '../../icons/check-circle.svg';
import { ReactComponent as ViewMoreIcon } from '../../icons/ellipsis-h.svg';

import { ReactComponent as UserIcon } from '../../icons/user.svg';

import './Task.css';

const Task = ({ data: { completed, title, id, dueDate } }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={isChecked ? 'task completed' : 'task'}>
      <div className="task__checkbox" onClick={handleCheckbox}>
        {isChecked ? (
          <div className="task__checkbox-ticked">
            <CheckboxIcon width="30" />
          </div>
        ) : (
          <div className="task__checkbox-empty"></div>
        )}
      </div>
      <h3 className="task__title">{title}</h3>
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
