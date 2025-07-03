import React from 'react';
import type { FilterOptions, SortOption } from '../types';

interface TodoFilterProps {
  filters: FilterOptions;
  sortBy: SortOption;
  categories: string[];
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sort: SortOption) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  filters,
  sortBy,
  categories,
  onFilterChange,
  onSortChange
}) => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '8px',
      margin: '20px',
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      <div>
        <label>Status: </label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange({
            ...filters, 
            status: e.target.value as 'all' | 'completed' | 'pending'
          })}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div>
        <label>Priority: </label>
        <select
          value={filters.priority}
          onChange={(e) => onFilterChange({
            ...filters, 
            priority: e.target.value as 'all' | 'low' | 'medium' | 'high'
          })}
        >
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div>
        <label>Category: </label>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange({...filters, category: e.target.value})}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value as SortOption)}>
          <option value="date">Date</option>
          <option value="priority">Priority</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;