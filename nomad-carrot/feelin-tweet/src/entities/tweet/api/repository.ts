"use server";

import {db} from "@/src/shared/libs";
import {Tweet} from "@prisma/client";
import {TweetDetail, TweetWithProfile} from "@/src/entities/tweet";

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

export async function readTweetDetail(tweetId: number): Promise<TweetDetail | null> {
  return db.tweet.findUnique({
    where: {
      id: tweetId
    },
    include: {
      likes: true,
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
