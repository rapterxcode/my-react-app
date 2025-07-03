import React from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div style={{ 
      padding: '10px', 
      margin: '5px 0', 
      border: '1px solid #ddd', 
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000'
      }}>
        {todo.text}
      </span>
      <div>
        <button 
          onClick={() => onToggle(todo.id)}
          style={{ marginRight: '5px', padding: '5px 10px' }}
        >
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button 
          onClick={() => onDelete(todo.id)}
          style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;