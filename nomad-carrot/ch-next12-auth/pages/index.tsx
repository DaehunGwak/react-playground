import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useSWR from "swr";
import fetcher from "../src/shared/api/fetcher";
import {UserMeResponse} from "../src/entities/user";

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const {isLoading, data} = useSWR<UserMeResponse>("/api/users/me", fetcher);

  useEffect(() => {
    if (isLoading === false && data === undefined) {
      router.push("/create-account");
    }
  }, [isLoading]);

  if (isLoading || data === undefined) {
    return (
      <div>
        <HeadMeta/>
        <main>
          loading...
        </main>
      </div>
    );
  }

  return (
    <div>
      <HeadMeta/>
      <main>
        <h1>Welcome: {data!.name}</h1>
        <h3>Your email is: {data!.email}</h3>
      </main>
    </div>
  )
}

function HeadMeta() {
  return (
    <Head>
      <title>Profile: Nomad Carrot</title>
      <meta name="description" content="Nomadcoders react challenge day 56 (next12, swr, iron-session)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default ProfilePage
