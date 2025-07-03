import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import type { Todo } from './types';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'Learn React with TypeScript',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 2,
      text: 'Setup Vite project',
      completed: true,
      createdAt: new Date()
    }
  ]);

  const [inputText, setInputText] = useState<string>('');

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <Header title="Todo App v1.0" todoCount={todos.length} />
      
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add new todo..."
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px 20px' }}>
          Add Todo
        </button>
      </div>

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;