import {TweetContentsColumn, TweetDetail, TweetLikeButton, TweetProfileColumn} from "@/src/entities/tweet";

export default function TweetDetailCard({tweet}: {tweet: TweetDetail}) {
  const profile = tweet.profile!;

  return (
    <div className="w-full max-w-screen-sm flex flex-col gap-4 rounded-lg shadow-gray-400 shadow-md py-4 px-6">
      <TweetProfileColumn profile={profile} createdAt={tweet.createdAt}/>
      <TweetContentsColumn text={tweet.text} imageUrls={tweet.imageUrls}/>
      <div className="flex flex-row gap-4 justify-end w-full">
        <TweetLikeButton likes={tweet.likes}/>
      </div>
    </div>
  );
}
