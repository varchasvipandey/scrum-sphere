"use client";

import { Button } from "@/components/ui/button";
import { BoardContainer } from "../board-container/board-container";
import { getIcon } from "@/components/icons";
import { BoardCreatorDialog } from "@/app/(user)/(private)/_components";
import { useState } from "react";

const AddIcon = getIcon("add");

export const CreateBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpenChange = (isOpen: boolean) => setIsOpen(isOpen);

  return (
    <BoardContainer>
      <BoardCreatorDialog
        open={isOpen}
        onOpenChange={handleOnOpenChange}
        trigger={
          <Button variant="text" className="h-full rounded-md flex flex-col justify-center items-center space-y-2 text-primary">
            <AddIcon />
            <p>Create new board</p>
          </Button>
        }
      />
    </BoardContainer>
  );
};
