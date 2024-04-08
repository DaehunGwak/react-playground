import { PrismaClient } from "@prisma/client";
import {randomUUID} from "crypto";

const db = new PrismaClient();

async function test() {
  const test = await db.test.create({
    data: {
      text: "hello prisma!"
    }
  });
  console.log(test);

  const user = await db.user.create({
    data: {
      username: randomUUID(),
    },
  });
  console.log(user);
}

export default db;
