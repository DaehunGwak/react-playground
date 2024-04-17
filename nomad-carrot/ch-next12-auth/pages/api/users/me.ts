import type {NextApiRequest, NextApiResponse} from "next";
import {withIronSessionApiRoute} from "iron-session/next";
import {ironSessionOptions} from "../../../src/shared/models/iron-session-options";
import {findUserById} from "../../../src/entities/user/api/user-db";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = req.session.user?.id;

    if (id === undefined) {
      res.status(400).end();
      return;
    }

    const user = await findUserById(id);
    res.status(200).json({
      name: user!.name,
      email: user!.email,
    });
  }
  res.status(404).end();
}

export default withIronSessionApiRoute(handler, ironSessionOptions);
