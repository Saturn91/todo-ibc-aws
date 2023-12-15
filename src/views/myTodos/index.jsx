import { createContext, useEffect, useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
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
      <section>
        <h1>Organize your Tasks</h1>
        <AddToDoForm />
        {loading ? "...loading":
          <>
            <ToDoList todos={todos}></ToDoList>
            <ToDoList todos={todos} done></ToDoList>
          </>        
        }
      </section>      
    </TodoContext.Provider>
  );
};
export default MyTodoView;
