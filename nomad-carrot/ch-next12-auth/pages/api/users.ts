import type {NextApiRequest, NextApiResponse} from "next";
import {createUser} from "../../src/entities/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body) as UserCreateRequestBody;
    await createUser(body.name, body.email);
    res.status(201).end();
    return;
  }
  res.status(404).end();
}

interface UserCreateRequestBody {
  name: string;
  email: string;
}
