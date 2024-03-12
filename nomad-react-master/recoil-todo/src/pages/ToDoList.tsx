import {useForm} from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
