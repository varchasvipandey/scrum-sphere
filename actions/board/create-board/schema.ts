import { z } from "zod";

export const CreatedBoard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title must be 3 characters long",
    }),
});
