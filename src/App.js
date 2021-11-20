import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [isShowAddTask, setIsShowAddTask] = useState(false);
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
      reminder: false,
    },
    {
      id: 333,
      text: 'Learn JS',
      day: 'March 3th at 4:00pm',
      reminder: true,
    },
  ]);

  //ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
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

  //toggle ShowAddTask
  const toggleShowAddTask = () => {
    setIsShowAddTask(!isShowAddTask);
  };

  return (
    <div className="container">
      <Header
        title="Header"
        toggleShowAddTask={toggleShowAddTask}
        isShowAddTask={isShowAddTask}
      />
      {isShowAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
