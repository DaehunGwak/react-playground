import Link from "next/link";
import {TweetContentsColumn, TweetProfileColumn, TweetWithProfile} from "@/src/entities/tweet";

export default function TweetSimpleCard({tweet}: { tweet: TweetWithProfile }) {
  const profile = tweet.profile!;

  return (
    <Link href={`/tweets/${tweet.id}`} className="w-full flex justify-center">
      <div className="w-full max-w-screen-sm flex flex-col gap-4 rounded-lg shadow-gray-400 shadow-md
            py-4 px-6 hover:bg-gray-200">
        <TweetProfileColumn profile={profile} createdAt={tweet.createdAt}/>
        <TweetContentsColumn text={tweet.text} imageUrls={tweet.imageUrls}/>
      </div>
    </Link>
  );
}
