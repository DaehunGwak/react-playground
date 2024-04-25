import {db} from "@/src/shared/libs";
import FeelinTitle from "@/src/shared/ui/feelin-title";
import {LogoutButton} from "@/src/features/auth";

export default async function Home() {
  const tweets = await db.tweet.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeelinTitle/>
      <LogoutButton/>
      <span>{JSON.stringify(tweets)}</span>
    </main>
  );
}
