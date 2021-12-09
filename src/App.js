import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import {
  fetchTasks,
  fetchTask,
  postTaskOnServer,
  deleteTaskFromServer,
  putToggleTaskReminder,
} from './api/json-server';

function App() {
  const [isShowAddTask, setIsShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    ////Local State
    // {
    //   id: 111,
    //   text: 'Doctor Teeth',
    //   day: 'Feb 5th at 2:30pm',
    //   reminder: true,
    // },
    // {
    //   id: 222,
    //   text: 'Academic hours',
    //   day: 'Feb 27th at 1:20am',
    //   reminder: false,
    // },
    // {
    //   id: 333,
    //   text: 'Learn JS',
    //   day: 'March 3th at 4:00pm',
    //   reminder: true,
    // },
  ]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //ADD TASK
  //if work with local tasks
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newTask = { id, ...task };
  //   setTasks([...tasks, newTask]);
  // };

  // if work with server data tasks
  const addTask = async (task) => {
    const data = await postTaskOnServer(task);

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //DELETE TASK

  //if work with local data tasks
  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  //if work with server data tasks
  const deleteTask = async (id) => {
    await deleteTaskFromServer(id);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  //work with local task
  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: !task.reminder } : task
  //     )
  //   );
  // };

  //work with task from server

  const toggleReminder = async (id) => {
    const getTaskToToggle = await fetchTask(id);
    //copied the task where we will udpate the reminder
    const updateTaskToggle = {
      ...getTaskToToggle,
      reminder: !getTaskToToggle.reminder,
    };

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updateToggleTask),
    // });

    // const data = await res.json();

    const dataFromServer = await putToggleTaskReminder(id, updateTaskToggle);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: dataFromServer.reminder } : task
      )
    );
  };

  //toggle ShowAddTask
  const toggleShowAddTask = () => {
    setIsShowAddTask(!isShowAddTask);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task Tracker "
          toggleShowAddTask={toggleShowAddTask}
          isShowAddTask={isShowAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {isShowAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No tasks to show'
                )}
              </React.Fragment>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
