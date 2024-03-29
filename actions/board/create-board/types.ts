import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreatedBoard } from "./schema";

export type InputType = z.infer<typeof CreatedBoard>;
export type ReturnType = ActionState<InputType, Board>;
