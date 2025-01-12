import {NextApiRequest, NextApiResponse} from "next";
import {userCreate} from "@/services/user/create";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const email = req.body.email;
  const userId = await userCreate(email);
  res.json({userId});
}