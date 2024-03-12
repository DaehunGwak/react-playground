import {ChangeEvent, FormEvent, useState} from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
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
    </div>
  );
}

export default ToDoList;
