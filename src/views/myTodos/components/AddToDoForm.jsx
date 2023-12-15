import { useState, useContext } from 'react';
import TodoContext from '../contexts/ToDoContext';
import { useTodos } from '../hooks.js/useTodos';

const AddToDoForm = () => {
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState();
  const [loading, setLoading] = useState(false)
  const {addToDo} = useTodos();
  const { setContextValue } = useContext(TodoContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    // Here you would typically handle adding the new todo
    const {todos, error} = await addToDo(description);
    
    error && setFormError("failed with " + error.message || "unknown error")

    if(todos &! error) {
      setDescription(''); // Reset the input field after submission
      setFormError();
      setContextValue(todos);
    }

    setLoading(false);
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box'
  };

  const errorStyle = {
    fontSize: "12px",
    color:"red"
  }

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={cardStyle}>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Add new todo..." 
          style={inputStyle}
          required
        />
        {formError && <p style={errorStyle}>{formError}</p>}
        <button type="submit" style={buttonStyle} disabled={loading}>
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
