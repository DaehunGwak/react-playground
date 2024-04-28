import {Prisma} from "@prisma/client";
import TweetGetPayload = Prisma.TweetGetPayload;
import {convertToTimeSinceString} from "@/src/shared/libs/date-utils";
import {GoPerson} from "react-icons/go";

export default function TweetSimple({tweet}: {tweet: TweetGetPayload<{include: {profile: true}}>}) {
  const profile = tweet.profile!;

  return (
    <div className="w-full max-w-screen-sm flex flex-row rounded-lg shadow-gray-400 shadow-md py-4 px-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <div>
            <GoPerson className="w-6 h-6"/>
          </div>
          <span className="text-lg font-bold">
            {profile.nickname}
          </span>
          <span className="font-light text-sm text-gray-400">
            {convertToTimeSinceString(tweet.createdAt)}
          </span>
        </div>
        <span className="text-lg">
          {tweet.text}
        </span>
      </div>
    </div>
  );
}
