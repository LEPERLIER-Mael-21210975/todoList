import React from 'react';

const Footer = ({ onSearch, onAdd, onSave }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <footer>
            <input
                type="text"
                placeholder="Search tasks..."
                onChange={handleChange}
            />
            <button onClick={onAdd}>Add Task</button>
            <button onClick={onSave}>Save</button>
        </footer>
    );
};

export default Footer;