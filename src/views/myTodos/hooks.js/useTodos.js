const { useState } = require("react");

export const useTodos = () => {
  const load = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "GET",
    });

    if (response.ok) return { todos: await response.json() };
    return { error: response.code };
  };

  return { load };
};
