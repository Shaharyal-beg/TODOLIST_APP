import React from 'react';

const TodoForm = ({ value, setValue, todoList, setTodoList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, value]);
    setValue(''); 
  };
  return (
    <form type='submit' className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Add Your Todos'
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;