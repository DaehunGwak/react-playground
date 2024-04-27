"use server";

import {db} from "@/src/shared/libs";
import {Prisma, Profile} from "@prisma/client";
import {PrismaResult} from "@/src/shared/model/prisma";
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;

export async function createProfile(profile: Profile): Promise<PrismaResult<Profile>> {
  try {
    return {
      result: await db.profile.create({
        data: profile,
      })
    };
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      console.log(e.message, e.code, e.meta);
      return {
        error: e,
      };
    }
    throw e;
  }
}

export async function readProfile(userId: string): Promise<Profile | null> {
  return db.profile.findUnique({
    where: {
      userId: userId,
    }
  });
}

export async function updateProfile(profile: Profile): Promise<Profile> {
  return db.profile.update({
    where: {
      userId: profile.userId,
    },
    data: profile,
  });
}
