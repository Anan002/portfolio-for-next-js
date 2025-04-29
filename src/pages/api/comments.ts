import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize Prisma Client properly for serverless environments
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  console.log("Received request:", req.method, req.query);
  
  if (req.method === "POST") {
    const { name, email, content, blogId } = req.body;

    if (!blogId || typeof blogId !== "string" || !content?.trim()) {
      return res.status(400).json({ error: "blogId and content are required." });
    }

    try {
      const comment = await prisma.comment.create({
        data: {
          name,
          email,
          content,
          blogId,
        },
      });
      return res.status(201).json(comment);
    } catch (error) {
      console.error("Error saving comment:", error);
      return res.status(500).json({ error: "Error saving comment" });
    }
  } else if (req.method === "GET") {
    const { blogId } = req.query;

    if (!blogId || typeof blogId !== "string") {
      return res.status(400).json({ error: "Missing or invalid blogId in query." });
    }

    try {
      const comments = await prisma.comment.findMany({
        where: { blogId },
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      return res.status(500).json({ error: "Error fetching comments" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}