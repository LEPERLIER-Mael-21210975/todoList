import React from 'react';

const Header = ({ tasks }) => {
  const remainingTasks = tasks.filter(task => !task.isChecked).length;

  return (
    <header>
      <h1>Todo List</h1>
      <p>{remainingTasks} tasks remaining</p>
    </header>
  );
};

export default Header;
