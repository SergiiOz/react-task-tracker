import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <React.Fragment>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} />;
      })}
    </React.Fragment>
  );
};

export default Tasks;
