import React, { useState } from 'react';
import type { Todo } from '../types';

interface AddTodoProps {
  onAdd: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  categories: string[];
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd, categories }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({
        text: text.trim(),
        completed: false,
        priority,
        category: newCategory || category
      });
      setText('');
      setNewCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '20px',
      backgroundColor: '#fff'
    }}>
      <h3>Add New Todo</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo text..."
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
          required
        />
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <div>
          <label>Priority: </label>
          <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label>Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label>New Category: </label>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Or create new..."
            style={{ padding: '4px' }}
          />
        </div>
      </div>

      <button type="submit" style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white',
        border: 'none',
        borderRadius: '4px'
      }}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;