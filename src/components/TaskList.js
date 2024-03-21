import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, onDelete, onToggleCheck, onTaskOrderChange }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onTaskOrderChange(items);
  };

return (
  <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId="tasks">
      {(provided) => (
        <ul ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Draggable key={task.title} draggableId={task.title} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <input
                    type="checkbox"
                    checked={task.isChecked}
                    onChange={() => onToggleCheck(index)}
                  />
                  <span>{task.title}</span>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  </DragDropContext>
);

};

export default TaskList;
