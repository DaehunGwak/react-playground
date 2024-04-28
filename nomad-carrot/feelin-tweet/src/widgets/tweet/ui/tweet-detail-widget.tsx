import {readTweetWithProfile} from "@/src/entities/tweet";
import {TweetDetailCard} from "@/src/features/tweet";
import {redirect} from "next/navigation";

export default async function TweetDetailWidget({tweetId}: {tweetId: number}) {
  const tweet = await readTweetWithProfile(tweetId);

  if (!tweet) {
    redirect("/");
    return;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 pb-14 px-6 gap-4">
      <TweetDetailCard tweet={tweet}/>
    </div>
  );
}
