import React from 'react';

const TaskList = ({ tasks, onDelete, onToggleCheck, onTaskOrderChange }) => {
    const handleMoveUp = (index) => {
        if (index === 0 || !onTaskOrderChange) return;
        const updatedTasks = Array.from(tasks);
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;
        onTaskOrderChange(updatedTasks);
    };

    const handleMoveDown = (index) => {
        if (index === tasks.length - 1 || !onTaskOrderChange) return;
        const updatedTasks = Array.from(tasks);
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = temp;
        onTaskOrderChange(updatedTasks);
    };

    const isDeadlinePassed = (deadline) => {
        const now = new Date();
        const taskDeadline = new Date(deadline);
        return now > taskDeadline;
    };

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={task.title} className={task.isChecked ? 'checked' : ''}>
                    <input
                        type="checkbox"
                        checked={task.isChecked}
                        onChange={() => onToggleCheck(index)}
                    />
                    <span className="task-title">{task.title}</span>
                    {task.deadline && (
                        <span className={isDeadlinePassed(task.deadline) ? 'deadline-passed' : 'deadline'}>
                            {isDeadlinePassed(task.deadline) ? "(Deadline Passed)" : `Deadline: ${task.deadline}`}
                        </span>
                    )}
                    {task.category && (
                        <span className="category">
                            {task.category === 'Personal' && '⚽️'}
                            {task.category === 'Work' && '💼'}
                            {task.category === 'Study' && '📚'}
                            {task.category === 'Other' && '🎁'}
                        </span>
                    )}
                    <div className="task-buttons">
                        <button onClick={() => onDelete(index)} className="delete-btn">Delete</button>
                        <button onClick={() => handleMoveUp(index)} className="move-up-btn">▲</button>
                        <button onClick={() => handleMoveDown(index)} className="move-down-btn">▼</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
