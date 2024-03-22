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
        <ul>
            {tasks.map((task, index) => (
                <li key={task.title}>
                    <input
                        type="checkbox"
                        checked={task.isChecked}
                        onChange={() => onToggleCheck(index)}
                    />
                    <span>{task.title}</span>
                    {task.deadline && (
                        <span>
                            {isDeadlinePassed(task.deadline) ? "(Deadline Passed)" : `Deadline: ${task.deadline}`}
                        </span>
                    )}
                    <button onClick={() => onDelete(index)}>Delete</button>
                    <button onClick={() => handleMoveUp(index)}>▲</button>
                    <button onClick={() => handleMoveDown(index)}>▼</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
