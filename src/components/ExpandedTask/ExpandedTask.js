import React from 'react';

import './ExpandedTask.css';

const ExpandedTask = (props) => {
  const { title, description, assignee, dueDate } = props.data;
  return (
    <div className="expanded-task">
      <h3 className="expanded-task__title">{title}</h3>
      <p className="expanded-task__description">{description}</p>
      <div className="expanded-task__grid-container">
        <h4 className="expanded-task__sub-heading">assignee</h4>
        <span className="expanded-task__sub-info">{assignee}</span>
        <h4 className="expanded-task__sub-heading">due date</h4>
        <span className="expanded-task__sub-info">{dueDate}</span>
      </div>
    </div>
  );
};

export default ExpandedTask;
