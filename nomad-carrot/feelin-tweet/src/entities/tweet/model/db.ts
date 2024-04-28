import { Prisma } from "@prisma/client";
import TweetGetPayload = Prisma.TweetGetPayload;

export type TweetWithProfile = TweetGetPayload<{
  include: {
    profile: true
  }
}>;

export type TweetDetail = TweetGetPayload<{
  include: {
    likes: true,
    profile: true,
  }
}>;
