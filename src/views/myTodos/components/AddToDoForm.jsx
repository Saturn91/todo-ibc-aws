import React, { useState } from 'react';

const AddToDoForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle adding the new todo
    console.log('Adding ToDo:', description);
    setDescription(''); // Reset the input field after submission
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
        />
        <button type="submit" style={buttonStyle}>
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
