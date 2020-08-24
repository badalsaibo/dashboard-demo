import React from 'react';

import Task from './components/Task/Task';
// import ExpandedTask from './components/ExpandedTask/ExpandedTask';
// import AddTask from './components/AddTask/AddTask';
import TaskContainer from './components/TaskContainer/TaskContainer';

import './App.css';

const data = [
  {
    completed: true,
    title: 'Training schedule for new hires',
    assignee: 'Mark Jonas',
    dueDate: '21/08/2020',
    description:
      'Dicta eaque non quas soluta omnis dicta. Harum quaerat omnis voluptatibus tempore quasi. Dolores dolorum adipisci ut. Aut est dicta ea odit. Aut vel et harum dolorum.',
    asanaUrl: 'https://asana.com',
  },
  {
    completed: false,
    title: 'Discuss canditates for sales manager',
    assignee: 'Rishabh Parth',
    dueDate: '22/08/2020',
    description:
      'Dicta eaque non quas soluta omnis dicta. Harum quaerat omnis voluptatibus tempore quasi. Dolores dolorum adipisci ut. Aut est dicta ea odit. Aut vel et harum dolorum.',
    asanaUrl: 'https://asana.com',
  },
  {
    completed: false,
    assignee: 'Meghna',
    title: 'Workload check-in',
    dueDate: '25/08/2020',
    description:
      'Dicta eaque non quas soluta omnis dicta. Harum quaerat omnis voluptatibus tempore quasi. Dolores dolorum adipisci ut. Aut est dicta ea odit. Aut vel et harum dolorum.',
    asanaUrl: 'https://asana.com',
  },
];

function App() {
  return (
    <div className="container">
      <TaskContainer>
        {data.map((e) => (
          <Task data={e} key={e.assignee} />
        ))}
      </TaskContainer>
    </div>
  );
}

export default App;
