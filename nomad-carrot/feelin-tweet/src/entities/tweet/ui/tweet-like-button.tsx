"use client";

import {HiHeart, HiOutlineHeart} from "react-icons/hi";
import useSWR from "swr";
import {createTweetLike, deleteTweetLike, readTweetLikesCountWithMyLike, TweetMyLike} from "@/src/entities/tweet";

export default function TweetLikeButton({tweetId}: {tweetId: number}) {
  const {data, mutate} = useSWR<TweetMyLike>(
    ["like", tweetId],
    async ([_, tweetId]) => readTweetLikesCountWithMyLike(tweetId as number),
  );

  const toggleLike = async () => {
    const {myLikeId, likeCount} = data!;

    await mutate(
      {
        myLikeId: myLikeId ? null : 1,
        likeCount: myLikeId ? likeCount - 1 : likeCount + 1,
      },
      {revalidate: false},
    );

    myLikeId ?
      await deleteTweetLike(myLikeId) :
      await createTweetLike(tweetId);

    await mutate();
  };

  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <button
        disabled={!data}
        onClick={toggleLike}
      >
        {data?.myLikeId ?
          <HiHeart className="w-7 h-7 fill-red-400"/> :
          <HiOutlineHeart className="w-7 h-7"/>}
      </button>
      <span className="text-sm w-6 text-center">
        {data?.likeCount ?? 0}
      </span>
    </div>
  )
}

