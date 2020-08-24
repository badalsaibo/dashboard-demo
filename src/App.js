import React, { useState } from 'react';

import Task from './components/Task/Task';
// import ExpandedTask from './components/ExpandedTask/ExpandedTask';
import Header from './components/Header/Header';
import TaskContainer from './components/TaskContainer/TaskContainer';
import AddTask from './components/AddTask/AddTask';

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
  const [toggleAddTask, setToggleAddTask] = useState(false);

  const handleToggleAddTask = () => setToggleAddTask(!toggleAddTask);

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
      <Header handleToggleAddTask={handleToggleAddTask} />
      <TaskContainer>
        {tasks.map((e) => (
          <Task data={e} key={e.id} toggleCompleted={toggleCompleted} />
        ))}
      </TaskContainer>
      {toggleAddTask ? (
        <AddTask handleToggleAddTask={handleToggleAddTask} />
      ) : null}
    </div>
  );
}

export default App;
