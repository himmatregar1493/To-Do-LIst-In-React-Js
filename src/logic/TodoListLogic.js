
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import TodoList from './TodoList';

const TodoListLogic = () => {
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
    <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
  );
};

export default TodoListLogic;
