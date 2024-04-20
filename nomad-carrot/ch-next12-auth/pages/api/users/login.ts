import type {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {ironSessionOptions} from "../../../src/shared/models/iron-session-options";
import {findUserByEmail} from "../../../src/entities/user";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body) as UserLoginRequestBody;
    const user = await findUserByEmail(body.email);

    if (user === null) {
      res.status(400).json({
        message: "Email is not found"
      });
      return;
    }

    req.session.user = {id: user.id};
    await req.session.save();

    res.status(201).end();
    return;
  }
  res.status(404).end();
}

interface UserLoginRequestBody {
  email: string;
}

export default withIronSessionApiRoute(handler, ironSessionOptions);