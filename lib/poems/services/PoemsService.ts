import { DB } from "../../../prisma/db";

export class PoemsService {
  constructor(private readonly db: DB) {}

  async create(content: string, author: string) {
    if (content.length > 600) {
      throw new Error("Exceeded max length");
    }

    return this.db.poem.create({
      data: {
        content: content,
        author: author ?? "Anonymous",
      },
    });
  }

  async listAll() {
    return this.db.poem.findMany({
      select: {
        id: true,
        content: true,
        createdAt: true,
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
