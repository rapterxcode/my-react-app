import React from 'react';

interface HeaderProps {
  title: string;
  todoCount: number;
}

const Header: React.FC<HeaderProps> = ({ title, todoCount }) => {
  return (
    <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
      <h1>{title}</h1>
      <p>Total Todos: {todoCount}</p>
    </header>
  );
};

export default Header;