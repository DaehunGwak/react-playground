import {TweetNewForm, TweetSimple} from "@/src/features/tweet";
import {readTweetsWithProfile} from "@/src/entities/tweet";

export default async function TimelineWidget() {
  const tweets = await readTweetsWithProfile();

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 px-6 gap-4">
      <TweetNewForm/>
      {tweets.map(tweet =>
        <TweetSimple
          key={`tweet-${tweet.id}`}
          tweet={tweet}
        />)}
    </div>
  );
}
