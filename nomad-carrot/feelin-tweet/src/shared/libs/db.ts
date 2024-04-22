import {PrismaClient} from "@prisma/client";

class PrismaClientSingleton {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaClientSingleton.instance) {
      PrismaClientSingleton.instance = new PrismaClient();
    }
    return PrismaClientSingleton.instance;
  }
}

export default PrismaClientSingleton.getInstance();
