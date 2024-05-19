// App.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import TodoList from './components/TodoList';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoData = Cookies.get('todos');
    if (todoData) {
      setTodos(JSON.parse(todoData));
    }
  }, []);

  useEffect(() => {
    Cookies.set('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <div className="input-container">
        <input type="text" placeholder="Add new todo" onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTodo(e.target.value.trim());
            e.target.value = '';
          }
        }} />
        <button onClick={() => {
          const inputValue = document.getElementById('todoInput').value.trim();
          if (inputValue !== '') {
            addTodo(inputValue);
            document.getElementById('todoInput').value = '';
          }
        }}>Create</button>
      </div>
    </div>
  );
};

export default App;
