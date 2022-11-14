import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../prisma/db";
import { PoemsService } from "../../../../lib/poems/services/PoemsService";

const poemsService = new PoemsService(db);

export default async function handleCreatePoem(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const content = req.body.content;
  const author = req.body.author;
  const newPoem = await poemsService.create(content, author);
  return res.status(201).json(newPoem);
}
