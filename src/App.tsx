import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      <NewTodo onAddTodo={addTodoHandler} />
    </div>
  );
}

export default App;
