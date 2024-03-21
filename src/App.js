import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = {
      title,
      isChecked: false,
    };
    setTasks([...tasks, newTask]);
    setModalOpen(false);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleCheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    setTasks(updatedTasks);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
        <Header tasks={tasks} />
        <Footer onSearch={handleSearch} onAdd={() => setModalOpen(true)} />
        <TaskList
            tasks={filteredTasks}
            onDelete={handleDeleteTask}
            onToggleCheck={handleToggleCheck}
        />
        {modalOpen && <Modal onClose={() => setModalOpen(false)} onAdd={handleAddTask} />}
      </div>
  );
};

export default App;
