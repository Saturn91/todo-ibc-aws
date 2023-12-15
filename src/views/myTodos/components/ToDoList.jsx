import ToDoItem from "./ToDoItem";

const ToDoList = ({done, todos}) => {
  const filteredTodos = todos.filter((todo) => todo.done == !!done);
  return <>{filteredTodos.map((todo, i) => <ToDoItem todo={todo} key={`todo-item-${done ? "done" : "todo"}-${i}`}/>)}</>;
}

export default ToDoList;