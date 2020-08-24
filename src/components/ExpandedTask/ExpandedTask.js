import React, { useRef, useEffect } from 'react';

import './ExpandedTask.css';

const ExpandedTask = (props) => {
  const { title, description, assignee, dueDate, id, completed } = props.data;
  const { toggleCompleted, toggleViewMore } = props;

  const expandedTaskElement = useRef();

  const handleExpandedTaskCompletion = () => {
    toggleCompleted(id);
    toggleViewMore();
  };

  const handleClickOutside = (e) => {
    if (!expandedTaskElement.current.contains(e.target)) {
      toggleViewMore();
      return;
    }
  };

  useEffect(() => {
    console.log(expandedTaskElement);
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="expanded-task" ref={expandedTaskElement}>
      <h3 className="expanded-task__title">{title}</h3>
      <p className="expanded-task__description">{description}</p>
      <div className="expanded-task__grid-container">
        <h4 className="expanded-task__sub-heading">assignee</h4>
        <span className="expanded-task__sub-info">{assignee}</span>
        <h4 className="expanded-task__sub-heading">due date</h4>
        <span className="expanded-task__sub-info">{dueDate}</span>
      </div>
      <button className="secondary-button" onClick={toggleViewMore}>
        view in asana
      </button>
      <button className="primary-button" onClick={handleExpandedTaskCompletion}>
        mark as&nbsp;
        {completed ? 'incomplete' : 'complete'}
      </button>
    </div>
  );
};

export default ExpandedTask;
