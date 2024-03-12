import {SubmitHandler, useForm} from "react-hook-form";

interface Inputs {
  email: string;
  name: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
    setError
  } = useForm<Inputs>({
    defaultValues: {
      email: "@naver.com"
    }
  });

  console.log(watch());
  console.log(errors);

  const onValid: SubmitHandler<Inputs> = (data) => {
    if (data.password !== data.password1) {
      setError("password1", {message: "password is not equal."},{shouldFocus: true});
    }
    setError("extraError", {message: "Hell Yeah"})
    console.log(data);
  };

  return (
    <div>
      <form
        style={{display: "flex", flexDirection: "column", width: "50vw"}}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed"
            }
          })}
          type="email"
          placeholder="Email"
        />
        <span>
          {errors.email?.message}
        </span>
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
        <input
          {...register("password1", {
            required: "message"
          })}
          type="password"
          placeholder="Password1"
        />
        <span>
          {errors.password1?.message}
        </span>
        <button>Add</button>
        <span>
          {errors.extraError?.message}
        </span>
      </form>
    </div>
  );
}

export default ToDoList;
