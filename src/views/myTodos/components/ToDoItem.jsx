const ToDoItem = ({ todo }) => {
  // {todo: {description: string, done: boolean}}

  const textStyle = {
    textDecoration: todo.done ? 'line-through' : 'none',
    color: todo.done ? 'grey' : 'black',
    fontStyle: todo.done ? 'italic' : 'normal'
  };

  return (
    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <input 
        type="checkbox" 
        checked={todo.done}
        style={{ marginRight: '10px' }}
        // onChange handler will be added here in future for functionality
        readOnly // This makes the checkbox visually represent the state but not editable directly
      />
      <span style={textStyle}>{todo.description}</span>
    </div>
  );
};

export default ToDoItem;