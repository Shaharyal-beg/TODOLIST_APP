import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Todo = ({ todoList, handleDelete }) => {
 
  return (
    <div className='todo'>
      {todoList.map((currentItem, index) =>(
        <div className='item' key={index}><ArrowRightIcon/><p>{currentItem}</p><button onClick={() => handleDelete(index)}>Delete</button></div> 
      ))}
      
    </div>
  );
};
export default Todo;