import db from "../../../shared/libs/db";

export async function createUser(name: string, email: string) {
  await db.user.create({
    data: {
      name: name,
      email: email,
    }
  });
}

export async function findUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email: email,
    }
  });
}
