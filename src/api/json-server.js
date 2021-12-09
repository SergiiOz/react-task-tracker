//Fetch all Tasks
export const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
};

//Fetch the one Task
export const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;
};

//Add Task on Server
export const postTaskOnServer = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  return data;
};

//delete Task from Server Data
export const deleteTaskFromServer = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  });
};

//Update toggle Reminder
export const putToggleTaskReminder = async (id, updateTaskToggle) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updateTaskToggle),
  });

  const data = await res.json();

  return data;
};
