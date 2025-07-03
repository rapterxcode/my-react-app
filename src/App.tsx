import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import AddTodo from './components/AddTodo';
import type { Todo, FilterOptions, SortOption } from './types';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: 'Learn React with TypeScript',
      completed: false,
      priority: 'high',
      category: 'Learning',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      text: 'Setup Vite project',
      completed: true,
      priority: 'medium',
      category: 'Development',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const [filters, setFilters] = useState<FilterOptions>({
    status: 'all',
    priority: 'all',
    category: ''
  });

  const [sortBy, setSortBy] = useState<SortOption>('date');

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(todos.map(todo => todo.category).filter(Boolean)));
  }, [todos]);

  // Filter and sort todos
  const filteredAndSortedTodos = useMemo(() => {
    let filtered = todos.filter(todo => {
      if (filters.status === 'completed' && !todo.completed) return false;
      if (filters.status === 'pending' && todo.completed) return false;
      if (filters.priority !== 'all' && todo.priority !== filters.priority) return false;
      if (filters.category && todo.category !== filters.category) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'alphabetical':
          return a.text.localeCompare(b.text);
        case 'date':
        default:
          return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });
  }, [todos, filters, sortBy]);

  const addTodo = (todoData: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTodo: Todo = {
      ...todoData,
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed, updatedAt: new Date() } 
        : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, text: newText, updatedAt: new Date() } 
        : todo
    ));
  };

  const stats = useMemo(() => {
    const completed = todos.filter(t => t.completed).length;
    const pending = todos.length - completed;
    const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
    
    return { total: todos.length, completed, pending, highPriority };
  }, [todos]);

  return (
    <div className="App">
      <Header title="Todo App v2.0" todoCount={stats.total} />
      
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e9ecef' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '10px' }}>
          <span>📝 Total: {stats.total}</span>
          <span>✅ Completed: {stats.completed}</span>
          <span>⏳ Pending: {stats.pending}</span>
          <span>🔥 High Priority: {stats.highPriority}</span>
        </div>
      </div>

      <AddTodo onAdd={addTodo} categories={categories} />
      
      <TodoFilter
        filters={filters}
        sortBy={sortBy}
        categories={categories}
        onFilterChange={setFilters}
        onSortChange={setSortBy}
      />

      <TodoList 
        todos={filteredAndSortedTodos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo}
        onEdit={editTodo}
      />

      {filteredAndSortedTodos.length === 0 && todos.length > 0 && (
        <p style={{ textAlign: 'center', margin: '20px', color: '#666' }}>
          No todos match current filters
        </p>
      )}
    </div>
  );
};

export default App;