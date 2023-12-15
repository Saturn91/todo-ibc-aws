export const useTodos = () => {
  const load = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
    });

    if (response.ok) return { todos: await response.json() };
    return { error: response.code };
  };

  const addToDo = async (description) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
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

  const updateToDo = async (todo) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }

    return { error: response };
  };

  const deleteTodo = async (todo) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }

    return { error: response };
  };

  return { addToDo, load, updateToDo, deleteTodo };
};
