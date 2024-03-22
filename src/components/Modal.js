import React, { useState } from 'react';
import '../Modal.css';

const Modal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('');

  // Liste des catégories prédéfinies
  const categories = ['Personal', 'Work', 'Study', 'Other'];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    onAdd(title, deadline, category);
    setTitle('');
    setDeadline('');
    setCategory('');
    onClose();
  };

  return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter task title"
          />
          <select
              value={category}
              onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
              type="date"
              value={deadline}
              onChange={handleDeadlineChange}
              placeholder="Enter deadline"
          />
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
  );
};

export default Modal;
