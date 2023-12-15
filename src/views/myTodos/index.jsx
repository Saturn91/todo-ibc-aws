import { createContext, useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import { useTodos } from "./hooks.js/useTodos";

const MyTodoView = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setToDos] = useState({});
  const { load } = useTodos();
  const TodoContext = createContext(todos);

  useEffect(() => {
    const run = async () => {
      const { todos, error } = await load();
      setLoading(false);
      setToDos(todos);
    };

    run();
  },[]);

  return (
    <TodoContext.Provider
      value={{ todoContext: todos, setToDoContext: setToDos }}
    >
      {loading ? "...loading":
        <>
          <ToDoList todos={todos}></ToDoList>
          <ToDoList todos={todos} done></ToDoList>
        </>        
      }
      
    </TodoContext.Provider>
  );
};
export default MyTodoView;
