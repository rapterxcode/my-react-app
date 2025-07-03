import React from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ff4444';
      case 'medium': return '#ffaa00';
      case 'low': return '#00aa00';
      default: return '#888';
    }
  };

  return (
    <div style={{ 
      padding: '15px', 
      margin: '8px 0', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      backgroundColor: todo.completed ? '#f8f9fa' : '#fff',
      borderLeft: `4px solid ${getPriorityColor(todo.priority)}`
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEdit}
              onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
              style={{ width: '100%', padding: '5px' }}
              autoFocus
            />
          ) : (
            <span style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#000',
              fontSize: '16px'
            }}>
              {todo.text}
            </span>
          )}
          
          <div style={{ 
            marginTop: '8px', 
            fontSize: '12px', 
            color: '#666',
            display: 'flex',
            gap: '15px'
          }}>
            <span>Priority: <strong style={{ color: getPriorityColor(todo.priority) }}>
              {todo.priority.toUpperCase()}
            </strong></span>
            {todo.category && <span>Category: <strong>{todo.category}</strong></span>}
            <span>Created: {todo.createdAt.toLocaleDateString()}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '5px' }}>
          <button 
            onClick={() => onToggle(todo.id)}
            style={{ 
              padding: '5px 10px',
              backgroundColor: todo.completed ? '#28a745' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            {todo.completed ? '✓' : '○'}
          </button>
          
          <button 
            onClick={() => setIsEditing(!isEditing)}
            style={{ 
              padding: '5px 10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            ✏️
          </button>
          
          <button 
            onClick={() => onDelete(todo.id)}
            style={{ 
              padding: '5px 10px', 
              backgroundColor: '#dc3545', 
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;