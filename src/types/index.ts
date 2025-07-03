export interface Todo {
    id: number;
    text: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    category: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface AppProps {
    title: string;
  }
  
  export interface FilterOptions {
    status: 'all' | 'completed' | 'pending';
    priority: 'all' | 'low' | 'medium' | 'high';
    category: string;
  }
  
  export type SortOption = 'date' | 'priority' | 'alphabetical';