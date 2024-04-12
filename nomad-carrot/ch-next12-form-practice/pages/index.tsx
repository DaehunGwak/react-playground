import {useForm} from "react-hook-form";
import {useState} from "react";

const NAVER_EMAIL_POSTFIX = "@naver.com";

export default function HomeForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>();
  const [successText, setSuccessText] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit(_ => setSuccessText("Thank you"))}>
        <div>
          <span>Name: </span>
          <input
            {...register("username", {
              required: "Please write down your name"
            })}
            type="text"
          />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <span>Email: </span>
          <input
            {...register("email", {
              required: "Please write down your email",
              validate: (value: string) => value.endsWith(NAVER_EMAIL_POSTFIX) ? true : "Only @naver emails allowed"
            })}
            type="email"
            placeholder={`Only ${NAVER_EMAIL_POSTFIX}`}
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <span>Password: </span>
          <input
            {...register("password", {
              required: "Please write down your password",
              minLength: {
                value: 10,
                message: "Password has to be more than 10 chars"
              }
            })}
            type="password"
            placeholder="Min 10 characters"
          />
          <span>{errors.password?.message}</span>
        </div>
        <input type="submit" value="Log in" />
      </form>
      <span>{successText}</span>
    </>
  );
}

interface LoginForm {
  username: string;
  password: string;
  email: string;
}