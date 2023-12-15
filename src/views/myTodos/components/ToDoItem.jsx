import { useContext } from 'react';
import TodoContext from "../contexts/ToDoContext";
import { useTodos } from "../hooks.js/useTodos";

const ToDoItem = ({ todo }) => {
  // {todo: {description: string, done: boolean}}

  const { updateToDo, deleteTodo } = useTodos();
  const { setToDoContext } = useContext(TodoContext);

  const onUpdate = async () => {
    const newTodo = todo;
    newTodo.done = !todo.done;
    
    const {todos, error } = await updateToDo(newTodo)

    if(!error) {
      setToDoContext(todos)
    }
  }

  const onDelete = async () => {
    const newTodo = todo;
    newTodo.done = !todo.done;
    
    const {todos, error } = await deleteTodo(newTodo)

    if(!error) {
      setToDoContext(todos)
    }
  }

  const textStyle = {
    textDecoration: todo.done ? 'line-through' : 'none',
    color: todo.done ? 'grey' : 'black',
    fontStyle: todo.done ? 'italic' : 'normal'
  };

  const deleteStyle = {
    backgroundColor: "red",
    width: "24px",
    height: "24px",
    color: "white",
    marginLeft: "8px",
    boxSizing: 'border-box',
    textAlign: "center",
    lineHeight: "5px"
  }

  return (
    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <input 
        type="checkbox" 
        checked={todo.done}
        style={{ marginRight: '10px' }}
        onChange={() => onUpdate()}
        readOnly // This makes the checkbox visually represent the state but not editable directly
      />
      <span style={textStyle}>{todo.description}</span>
      <button style={deleteStyle} onClick={() => onDelete()}>x</button>
    </div>
  );
};

export default ToDoItem;