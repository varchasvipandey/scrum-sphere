import { Skeleton } from "@/components/ui/skeleton";
import { BoardContainer } from "../board-container/board-container";

export const BoardSkeleton = () => {
  return (
    <BoardContainer>
      <Skeleton className="w-full h-full" />
    </BoardContainer>
  );
};
