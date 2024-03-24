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
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks && savedTasks.length > 0) {
            setTasks(savedTasks);
        }
    }, []);

    const handleAddTask = (title, deadline, category) => {
        const newTask = {
            title,
            deadline,
            category,
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

    const handleTaskOrderChange = (updatedTasks) => {
        setTasks(updatedTasks);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSaveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header tasks={tasks} />
            <TaskList
                tasks={filteredTasks}
                onDelete={handleDeleteTask}
                onToggleCheck={handleToggleCheck}
                onTaskOrderChange={handleTaskOrderChange}
            />
            {modalOpen && <Modal onClose={() => setModalOpen(false)} onAdd={handleAddTask} />}
            <Footer onSearch={handleSearch} onAdd={() => setModalOpen(true)} onSave={handleSaveTasks} />
        </div>
    );
};

export default App;
