import {ChangeEvent, FormEvent, useState} from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      setTodoError("To do should be longer");
      return;
    }
    setTodoError("");
    console.log(`submit: ${todo}`);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="Write a to-do"
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      {
        todoError.length > 0
          ? todoError
          : null
      }
    </div>
  );
}

export default ToDoList;
