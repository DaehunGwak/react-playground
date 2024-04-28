"use server";

import {db} from "@/src/shared/libs";
import {Tweet} from "@prisma/client";

export async function readTweets(): Promise<Tweet[]> {
  return db.tweet.findMany();
}
