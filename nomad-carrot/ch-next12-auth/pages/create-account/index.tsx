import {NextPage} from "next";
import Head from "next/head";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

const CreateAccountPage: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<CreateAccountForm>()

  const createUserAndRedirect = async (data: CreateAccountForm) => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      alert("Account created! Please log in!");
      router.push("/log-in");
      return;
    }

    alert("Account creation failed.. Please retry :)");
  };

  return (
    <div>
      <Head>
        <title>Create Account: Nomad Carrot</title>
        <meta name="description" content="Nomadcoders react challenge day 56 (next12, swr, iron-session)"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(createUserAndRedirect)}>
          <div>
            <label htmlFor="input-name">Name:</label>
            <input
              {...register("name", {required: true})}
              type="text"
              id="input-name"
            />
          </div>
          <div>
            <label htmlFor="input-email">Email:</label>
            <input
              {...register("email", {required: true, validate: value => value.includes("@")})}
              type="email"
              id="input-email"
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </main>
    </div>
  )
}

interface CreateAccountForm {
  name: String;
  email: String;
}

export default CreateAccountPage;