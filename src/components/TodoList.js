// TodoList.js
import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
    
  return (
    <ul>
  {todos.map(todo => (
    <div key={todo.id} style={{ display: 'flex', marginRight: '10px', width:'100%' }}>
      <li style={{width:'calc(100% - 40px)'}}>
        {todo.text}
      </li>
      <button className='btn' style={{width:'105px'}} onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  ))}
</ul>
  );
};

export default TodoList;
