import {NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {LoginFailResponse} from "../../src/entities/user";

const LogInPage: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<LogInForm>();

  const loginAndRedirect = async (requestBody: LogInForm) => {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(requestBody)
    });

    if (response.status === 400) {
      const failResponse: LoginFailResponse = await response.json()
      alert(failResponse.message);
      return;
    }

    router.replace("/");
  };

  return (
    <div>
      <Head>
        <title>Log In: Nomad Carrot</title>
        <meta name="description" content="Nomadcoders react challenge day 56 (next12, swr, iron-session)"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginAndRedirect)}>
          <div>
            <label htmlFor="input-email">Email:</label>
            <input
              {...register("email", {required: true, validate: value => value.includes("@")})}
              type="email"
              id="input-email"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}

interface LogInForm {
  email: string;
}

export default LogInPage;