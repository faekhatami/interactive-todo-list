import React from "react";

const TodoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
