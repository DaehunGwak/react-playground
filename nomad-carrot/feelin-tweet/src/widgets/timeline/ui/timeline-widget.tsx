"use client";

import {TweetNewForm, TweetSimpleCard} from "@/src/features/tweet";
import {readTweetsWithProfileAndLikeCount, TweetWithProfileAndLikeCount} from "@/src/entities/tweet";
import useSWR from "swr";

export default function TimelineWidget() {
  const {data, mutate} = useSWR<TweetWithProfileAndLikeCount[]>(
    "/action/tweetWithProfiles",
    readTweetsWithProfileAndLikeCount
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-28 pb-14 px-6 gap-4">
      <TweetNewForm mutateTweets={mutate}/>
      {data?.map(tweet =>
        <TweetSimpleCard
          key={`tweet-${tweet.id}`}
          tweet={tweet}
          likeCount={tweet._count.likes}
        />)}
    </div>
  );
}
