import {Profile} from "@prisma/client";
import {GoPerson} from "react-icons/go";
import {convertToTimeSinceString} from "@/src/shared/libs/date-utils";

export default function TweetProfileColumn({profile, createdAt}: {
  profile: Profile,
  createdAt: Date
}) {
  return (
    <div className="flex flex-row items-center gap-4">
      <div>
        <GoPerson className="w-6 h-6"/>
      </div>
      <span className="text-lg font-bold">
        {profile.nickname}
      </span>
      <span className="font-light text-sm text-gray-400">
        {convertToTimeSinceString(createdAt)}
      </span>
    </div>
  );
}
