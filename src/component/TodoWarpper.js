import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoWrapper = () => {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const handleDelete = (index) => {
    const newTodoList = todoList.filter((todoList, i)=> i!==index );
    setTodoList(newTodoList);

  }

  return (
    <div className='main'>
      <h1>GET THINGS DONE!</h1>
      <TodoForm value={value} setValue={setValue} todoList={todoList} setTodoList={setTodoList} /><br />
      <Todo todoList={todoList} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoWrapper;