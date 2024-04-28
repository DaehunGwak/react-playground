import {HiOutlineHeart} from "react-icons/hi";

export default function TweetLikeColumn({likeCount}: { likeCount: number }) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <HiOutlineHeart className="w-5 h-5 stroke-gray-500"/>
      <span className="text-xs text-gray-500">
        {likeCount}
      </span>
    </div>
  );
}
