"use server";

import {db} from "@/src/shared/libs";
import {Like, Tweet} from "@prisma/client";
import {TweetMyLike, TweetWithProfile} from "@/src/entities/tweet";
import {readUserByCookie} from "@/src/entities/supabase-auth";

export async function readTweets(): Promise<Tweet[]> {
  return db.tweet.findMany({
    orderBy: [{createdAt: "desc"}]
  });
}

export async function readTweetsWithProfile(): Promise<TweetWithProfile[]> {
  return db.tweet.findMany({
    where: {
      profile: {
        userId: {not: undefined}
      }
    },
    include: {
      profile: true
    },
    orderBy: [
      {createdAt: "desc"}
    ],
  });
}

export async function readTweetWithProfile(tweetId: number): Promise<TweetWithProfile | null> {
  return db.tweet.findUnique({
    where: {
      id: tweetId
    },
    include: {
      profile: true,
    },
  });
}

export async function createTweet(text: string, userId: string): Promise<Tweet> {
  return db.tweet.create({
    data: {
      text: text,
      userId: userId,
    },
  });
}

export async function readTweetLikesCount(tweetId: number): Promise<number> {
  return db.like.count({
    where: {
      tweetId
    }
  });
}

export async function readTweetLikesCountWithMyLike(tweetId: number): Promise<TweetMyLike> {
  const user = await readUserByCookie();

  const likeCount =  await db.like.count({
    where: {
      tweetId: tweetId,
    }
  });
  const myLike = await db.like.findUnique({
    where: {
      userId_tweetId: {
        userId: user!.id,
        tweetId: tweetId,
      }
    }
  });

  return {
    likeCount,
    myLikeId: myLike?.id,
  };
}

export async function createTweetLike(tweetId: number): Promise<Like> {
  const user = await readUserByCookie();
  return db.like.create({
    data: {
      userId: user!.id,
      tweetId,
    }
  });
}

export async function deleteTweetLike(likeId: number): Promise<Like | null> {
  const user = await readUserByCookie();
  const like = await db.like.findUnique({
    where: {
      id: likeId,
    }
  });

  if (like === null || like.userId !== user!.id) {
    return null;
  }

  return db.like.delete({
    where: {
      id: likeId
    }
  });
}
