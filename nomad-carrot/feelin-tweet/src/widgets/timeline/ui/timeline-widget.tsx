import {TweetNewForm, TweetSimpleCard} from "@/src/features/tweet";
import {readTweetsWithProfile} from "@/src/entities/tweet";

export default async function TimelineWidget() {
  const tweets = await readTweetsWithProfile();

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 pb-14 px-6 gap-4">
      <TweetNewForm/>
      {tweets.map(tweet =>
        <TweetSimpleCard
          key={`tweet-${tweet.id}`}
          tweet={tweet}
        />)}
    </div>
  );
}
