import React, { useState } from 'react';
import '../Modal.css'; // Assurez-vous d'importer le fichier CSS pour le style du modal

const Modal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleSubmit = () => {
    onAdd(title, deadline);
    // console.log("Titre de la tâche :", title);
    // console.log("Date limite de la tâche :", deadline);
    setTitle('');
    setDeadline('');
    onClose(); // Ferme le modal après avoir ajouté une tâche
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
