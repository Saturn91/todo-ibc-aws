import { get, post, del, patch } from "aws-amplify/api";

export const useTodos = () => {
  const load = async () => {
    const apiAction = get({
      apiName: "todoApi",
      path: "/todos",
    });

    const response = await apiAction.response;

    if (response.statusCode == 200)
      return { todos: await response.body.json() };
    return { error: response.code };
  };

  const addToDo = async (description) => {
    const apiAction = post({
      apiName: "todoApi",
      path: "/todos",
      options: {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, done: false }),
      },
    });

    const response = await apiAction.response;

    if (response.statusCode == 200) {
      return { todos: await response.body.json() };
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
