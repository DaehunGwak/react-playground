import {readTweets} from "@/src/entities/tweet";
import {TweetNewForm} from "@/src/features/tweet";

export default async function TimelineWidget() {
  const tweets = await readTweets();

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 px-6 gap-4">
      <TweetNewForm/>
      <span>{JSON.stringify(tweets)}</span>
    </div>
  );
}
