"use server";

import {db} from "@/src/shared/libs";
import {Tweet} from "@prisma/client";

export async function readTweets(): Promise<Tweet[]> {
  return db.tweet.findMany({
    orderBy: [{createdAt: "desc"}]
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
