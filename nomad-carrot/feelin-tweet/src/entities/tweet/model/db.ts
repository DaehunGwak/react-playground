import { Prisma } from "@prisma/client";
import TweetGetPayload = Prisma.TweetGetPayload;

export type TweetWithProfile = TweetGetPayload<{
  include: {
    profile: true
  }
}>;

export type TweetWithProfileAndLikeCount = TweetGetPayload<{
  include: {
    profile: true,
    _count: {
      select: {
        likes: true,
      }
    }
  }
}>;

export type TweetMyLike = {
  myLikeId?: number | null,
  likeCount: number,
};
