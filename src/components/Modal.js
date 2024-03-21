import React, { useState } from 'react';
import '../Modal.css'; // Assurez-vous d'importer le fichier CSS pour le style du modal

const Modal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    onAdd(title);
    setTitle('');
    onClose(); // Ferme le modal après avoir ajouté une tâche
  };

  return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <input
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="Enter task title"
          />
          <button onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
  );
};

export default Modal;
