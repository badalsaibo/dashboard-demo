import React, { useState } from 'react';

import ExpandedTask from '../ExpandedTask/ExpandedTask';

import { ReactComponent as CheckboxIcon } from '../../icons/check-circle.svg';
import { ReactComponent as ViewMoreIcon } from '../../icons/ellipsis-h.svg';

import { ReactComponent as UserIcon } from '../../icons/user.svg';

import './Task.css';

const Task = (props) => {
  const { completed, id, title, dueDate } = props.data;
  const { toggleCompleted } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={completed ? 'task completed' : 'task'}>
        <div className="task__checkbox" onClick={() => toggleCompleted(id)}>
          {completed ? (
            <div className="task__checkbox-ticked">
              <CheckboxIcon width="32" />
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
        <div className="task__view-more" onClick={handleViewMore}>
          <ViewMoreIcon width="32" />
        </div>
      </div>
      {isExpanded ? (
        <ExpandedTask
          data={props.data}
          toggleCompleted={toggleCompleted}
          handleViewMore={handleViewMore}
        />
      ) : null}
    </>
  );
};

export default Task;
