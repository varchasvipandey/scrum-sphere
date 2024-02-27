import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<T_IN, T_OUT> = {
  fieldErrors?: FieldErrors<T_IN>;
  error?: string | null;
  data?: T_OUT;
};

export const createSafeAction = <T_IN, T_OUT>(schema: z.Schema<T_IN>, handler: (validatedData: T_IN) => Promise<ActionState<T_IN, T_OUT>>) => {
  return async (data: T_IN): Promise<ActionState<T_IN, T_OUT>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<T_IN>,
      };
    }

    return handler(validationResult.data);
  };
};
