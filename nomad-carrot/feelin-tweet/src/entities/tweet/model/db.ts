import { Prisma } from "@prisma/client";
import TweetGetPayload = Prisma.TweetGetPayload;

export type TweetWithProfile = TweetGetPayload<{
  include: {
    profile: true
  }
}>;

export type TweetMyLike = {
  myLikeId?: number | null,
  likeCount: number,
};
