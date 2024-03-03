import { ActionState, FieldErrors } from "@/lib/create-safe-action";
import { useCallback, useReducer } from "react";

type Action<T_IN, T_OUT> = (data: T_IN) => Promise<ActionState<T_IN, T_OUT>>;

interface Options<T_OUT> {
  onSuccess?: (data: T_OUT) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
}

interface State<T_IN, T_OUT> {
  fieldErrors?: FieldErrors<T_IN>;
  error?: string;
  data?: T_OUT;
  isLoading: boolean;
}

export const useAction = <T_IN, T_OUT>(action: Action<T_IN, T_OUT>, options: Options<T_OUT> = {}) => {
  const [state, setState] = useReducer(
    (s: State<T_IN, T_OUT>, a: Partial<State<T_IN, T_OUT>>) => ({
      ...s,
      ...a,
    }),
    { isLoading: false },
  );

  const run = useCallback(
    async (input: T_IN) => {
      setState({ isLoading: true, fieldErrors: undefined, error: undefined, data: undefined });

      try {
        const result = await action(input);
        if (!result) return;

        if (result.error) options.onError?.(result.error);
        if (result.data) options.onSuccess?.(result.data);

        setState({ ...result, isLoading: false });
      } catch (e) {
        setState({ isLoading: false, error: "Something went wrong" });
        options.onError?.("Something went wrong");
      } finally {
        options.onSettled?.();
      }
    },
    [action, options],
  );

  return { run, ...state };
};
