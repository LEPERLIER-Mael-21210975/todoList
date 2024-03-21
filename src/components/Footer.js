import React, { useState } from 'react';

const Footer = ({ onSearch, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <footer>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={onAdd}>Add Task</button>
    </footer>
  );
};

export default Footer;
