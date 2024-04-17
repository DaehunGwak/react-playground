import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const ProfilePage: NextPage = () => {
  const router = useRouter();

  // TODO: session 없을 시 re-direct 조건 추가
  useEffect(() => {
    router.push("/create-account");
  });

  return (
    <div>
      <Head>
        <title>Profile: Nomad Carrot</title>
        <meta name="description" content="Nomadcoders react challenge day 56 (next12, swr, iron-session)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome: Dummy</h1>
        <h3>Your email is: akakakk@naver.com</h3>
      </main>
    </div>
  )
}

export default ProfilePage
