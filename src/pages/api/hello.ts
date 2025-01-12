// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(JSON.stringify({vasya:'Pupkin'}));
  res.end();
}
