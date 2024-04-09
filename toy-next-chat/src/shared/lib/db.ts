import { PrismaClient } from "@prisma/client";
import {randomUUID} from "crypto";

const db = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "query",
    }
  ],
});

async function test() {
  const token = await db.sMSToken.create({
    data: {
      token: randomUUID(),
      user: {
        connect: {
          id: 1
        }
      }
    }
  });
  console.log(token);

  const tokens = await db.sMSToken.findMany({
    where: {
      user: {
        id: 1
      }
    },
    include: {
      user: true
    }
  })
  console.log(tokens);
}

test();

export default db;
