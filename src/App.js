import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Teeth',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Academic hours',
      day: 'Feb 27th at 1:20am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Learn JS',
      day: 'March 3th at 4:00pm',
      reminder: true,
    },
  ]);

  const addTask = () => {
    console.log('add task');
  };

  return (
    <div className="container">
      <Header title="Header" onClick={addTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
