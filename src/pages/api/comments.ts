import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, content, blogId } = req.body;

    // Validate input
    if (!blogId || typeof blogId !== "string" || !content?.trim()) {
      return res.status(400).json({ error: "blogId and content are required." });
    }

    try {
      const comment = await prisma.comment.create({
        data: {
          name,
          email,
          content,
          blogId, // blogId is a string slug like "A-Cup-Of-Tea"
        },
      });
      res.status(201).json(comment);
    } catch (error) {
      console.error("Error saving comment:", error);
      res.status(500).json({ error: "Error saving comment" });
    }

  } else if (req.method === "GET") {
    const blogId = req.query.blogId;

    if (!blogId || typeof blogId !== "string") {
      return res.status(400).json({ error: "Missing or invalid blogId in query." });
    }

    try {
      const comments = await prisma.comment.findMany({
        where: { blogId },
        orderBy: { createdAt: "desc" },
      });
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ error: "Error fetching comments" });
    }

  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
