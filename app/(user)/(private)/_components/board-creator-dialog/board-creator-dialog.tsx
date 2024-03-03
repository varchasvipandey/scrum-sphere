"use client";

import { createBoard } from "@/actions/board";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAction } from "@/hooks/use-action";

interface Props {
  trigger: JSX.Element;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const BoardCreatorDialog = ({ trigger, ...handlerProps }: Props) => {
  const { run, fieldErrors, isLoading } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
    onSettled() {
      console.log("Execution got finished");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    run({ title, description });
  };

  return (
    <Dialog {...handlerProps}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="md:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>Create new board</DialogTitle>
        </DialogHeader>

        <form className="space-y-4" action={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Board title</Label>
            <Input id="title" name="title" placeholder="My project MVP" disabled={isLoading} />
            {fieldErrors?.title?.[0] ? <p className="text-red-400 text-xs font-semibold">{fieldErrors.title[0]}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Purchase flow and minimum lovable features of the journey"
              maxLength={60}
              disabled={isLoading}
            />
          </div>
          <Button className="w-full" disabled={isLoading}>
            {isLoading ? "Creating board..." : "Create board"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
