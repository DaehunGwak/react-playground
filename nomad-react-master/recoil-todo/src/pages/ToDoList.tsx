import {SubmitHandler, useForm} from "react-hook-form";

interface Inputs {
  email: string;
  name: string;
  password: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState
  } = useForm<Inputs>();

  console.log(watch());
  console.log(formState.errors);

  const onValid: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {required: true})}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("name", {
            minLength: {
              value: 5,
              message: "Please, input "
            }
          })}
          type="text"
          placeholder="Name"
        />
        <input
          {...register("password", {
            required: "message"
          })}
          type="password"
          placeholder="Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
