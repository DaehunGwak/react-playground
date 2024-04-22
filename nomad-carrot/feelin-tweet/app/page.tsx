import {db} from "@/src/shared/libs";

export default async function Home() {
  const tweets = await db.tweet.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>feelin&apos;</span>
      <span>{JSON.stringify(tweets)}</span>
    </main>
  );
}
