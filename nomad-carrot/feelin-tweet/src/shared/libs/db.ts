import {PrismaClient} from "@prisma/client";

class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {
  }

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient({
        log: process.env.NODE_ENV === "production" ?
          [{emit: "stdout", level: "warn"}] :
          [{emit: "stdout", level: "query"}],
      });
    }
    return PrismaClientSingleton.instance;
  }
}

export default PrismaClientSingleton.getInstance();
