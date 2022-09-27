import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
