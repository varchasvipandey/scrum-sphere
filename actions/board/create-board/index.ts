"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Routes, getBoardRoute, getOrgRoute } from "@/lib/routes";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) return { error: "Unauthorized" };

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      error: "Failed to create",
    };
  }

  const orgBoardsPath = getOrgRoute(orgId, Routes.OrgBoards);
  revalidatePath(orgBoardsPath);

  const thisBoard = getBoardRoute(board.id);
  revalidatePath(thisBoard);

  return {
    data: board,
  };
};

export default handler;
