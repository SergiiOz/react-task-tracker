import React from 'react';
import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <React.Fragment>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </React.Fragment>
  );
};

export default Tasks;
