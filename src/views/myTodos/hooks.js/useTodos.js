const { useState } = require("react");

export const useTodos = () => {
  const load = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
    });

    if (response.ok) return { todos: await response.json() };
    return { error: response.code };
  };

  const addToDo = async (description) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, done: false }),
    });

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
    return { error: response };
  };

  return { addToDo, load };
};
