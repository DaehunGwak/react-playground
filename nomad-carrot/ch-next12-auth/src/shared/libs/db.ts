import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "query",
    }
  ],
});

export default db;