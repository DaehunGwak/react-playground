import {db} from "@/src/shared/libs";
import FeelinTitle from "@/src/shared/ui/feelin-title";

export default async function Home() {
  const tweets = await db.tweet.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeelinTitle/>
      <span>{JSON.stringify(tweets)}</span>
    </main>
  );
}