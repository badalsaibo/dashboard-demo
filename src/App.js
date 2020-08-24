import React, { useState, createContext } from 'react';

import Task from './components/Task/Task';
// import ExpandedTask from './components/ExpandedTask/ExpandedTask';
// import AddTask from './components/AddTask/AddTask';
import TaskContainer from './components/TaskContainer/TaskContainer';

import './App.css';

const data = [
  {
    id: '5ffjs',
    completed: true,
    title: 'Training schedule for new hires',
    assignee: 'Mark Jonas',
    dueDate: '21/08/2020',
    description:
      'Dicta eaque non quas soluta omnis dicta. Harum quaerat omnis voluptatibus tempore quasi. Dolores dolorum adipisci ut. Aut est dicta ea odit. Aut vel et harum dolorum.',
    asanaUrl: 'https://asana.com',
  },
  {
    id: '345jj',
    completed: false,
    title: 'Discuss canditates for sales manager',
    assignee: 'Rishabh Parth',
    dueDate: '22/08/2020',
    description:
      'Dicta eaque non quas soluta omnis dicta. Harum quaerat omnis voluptatibus tempore quasi. Dolores dolorum adipisci ut. Aut est dicta ea odit. Aut vel et harum dolorum.',
    asanaUrl: 'https://asana.com',
  },
  {
    id: '53h5h',
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
  const [tasks, setTasks] = useState(data);

  const toggleCompleted = (id) => {
    console.log(id);
    const updatedTasks = tasks.map((prevTask) => {
      return prevTask.id !== id
        ? prevTask
        : {
            ...prevTask,
            completed: !prevTask.completed,
          };
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <TaskContainer>
        {tasks.map((e) => (
          <Task data={e} key={e.id} toggleCompleted={toggleCompleted} />
        ))}
      </TaskContainer>
    </div>
  );
}

export default App;
