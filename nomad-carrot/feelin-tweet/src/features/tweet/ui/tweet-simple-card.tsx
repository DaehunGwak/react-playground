import Link from "next/link";
import {TweetContentsColumn, TweetLikeColumn, TweetProfileColumn, TweetWithProfile} from "@/src/entities/tweet";

export default function TweetSimpleCard({tweet, likeCount}: { tweet: TweetWithProfile, likeCount: number }) {
  const profile = tweet.profile!;

  return (
    <Link href={`/tweets/${tweet.id}`} className="w-full flex justify-center">
      <div className="flex flex-row w-full max-w-screen-sm gap-4 rounded-lg shadow-gray-400 shadow-md
            py-4 px-6 hover:bg-gray-200">
        <div className="flex flex-col gap-4 w-full">
          <TweetProfileColumn profile={profile} createdAt={tweet.createdAt}/>
          <TweetContentsColumn text={tweet.text} imageUrls={tweet.imageUrls}/>
        </div>
        <div className="flex flex-col justify-end">
          <TweetLikeColumn likeCount={likeCount}/>
        </div>
      </div>
    </Link>
  );
}
