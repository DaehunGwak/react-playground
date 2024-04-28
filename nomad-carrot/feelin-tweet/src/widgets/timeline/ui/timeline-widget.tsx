import {readTweets} from "@/src/entities/tweet";

export default async function TimelineWidget() {
  const tweets = await readTweets();

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 px-2">
      <span>{JSON.stringify(tweets)}</span>
    </div>
  );
}
