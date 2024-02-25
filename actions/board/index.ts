"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const Board = z.object({
  title: z.string(),
});

async function create() {
  const createdBoard = await db.board.create({
    data: {
      title: "First board of my app",
    },
  });

  console.log("Created board: ", createdBoard);
}

const boardActions = { create };

export default boardActions;
