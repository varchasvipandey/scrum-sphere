import { Button } from "@/components/ui/button";
import { BoardContainer } from "../board-container/board-container";
import { getIcon } from "@/components/icons";

const AddIcon = getIcon("add");

export const CreateBoard = () => {
  return (
    <BoardContainer>
      <Button variant="text" className="h-full rounded-md flex flex-col justify-center items-center space-y-2 text-primary">
        <AddIcon />
        <p>Create new board</p>
      </Button>
    </BoardContainer>
  );
};
