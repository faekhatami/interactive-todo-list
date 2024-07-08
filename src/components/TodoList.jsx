import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks }) => {
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
