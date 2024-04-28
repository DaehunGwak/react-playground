"use client";

import {Like} from "@prisma/client";
import {HiOutlineHeart, HiHeart} from "react-icons/hi";
import {useState} from "react";

export default function TweetLikeButton({likes}: { likes: Like[],  }) {
  const [myLike, setMyLike] = useState(false);

  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <button onClick={() => setMyLike(prev => !prev)}>
        {myLike ?
          <HiHeart className="w-7 h-7 fill-red-400"/> :
          <HiOutlineHeart className="w-7 h-7"/>}
      </button>
      <span>{likes.length}</span>
    </div>
  )
}