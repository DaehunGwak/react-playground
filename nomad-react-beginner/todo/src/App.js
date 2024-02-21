import {useState} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onTodoChange = (event) => setTodo(event.target.value);
  const onTodoSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((prev) => [todo, ...prev]);
    setTodo("");
  }

  return (
    <div>
      <h1>My To-Dos ({todos.length})</h1>
      <form onSubmit={onTodoSubmit}>
        <input
          value={todo}
          onChange={onTodoChange}
          type="text"
          placeholder={"write your to do"}
        />
        <button>Add</button>
      </form>
      <hr/>
      <ul>
        {
          todos.map((item, index) => (
            <li key={`todo-${index}`}>{item}</li>)
          )
        }
      </ul>
    </div>
  );
}

export default App;
