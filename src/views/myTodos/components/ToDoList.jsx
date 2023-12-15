import ToDoItem from "./ToDoItem";

const ToDoList = ({done, todos}) => {
  const filteredTodos = todos.filter((todo) => todo.done == !!done);
  return <>
    <h2>{done ? "Done" : "ToDo"}</h2>
    {filteredTodos.map((todo, i) => <ToDoItem todo={todo} key={`todo-item-${done ? "done" : "todo"}-${i}`}/>)}
  </>;
}

export default ToDoList;