import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 111,
      text: 'Doctor Teeth',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 222,
      text: 'Academic hours',
      day: 'Feb 27th at 1:20am',
      reminder: true,
    },
    {
      id: 333,
      text: 'Learn JS',
      day: 'March 3th at 4:00pm',
      reminder: true,
    },
  ]);

  //ADD TASK
  const addTask = () => {
    console.log('add task');
  };

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Header" onClick={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
