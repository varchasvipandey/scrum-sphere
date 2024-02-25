import { BoardSkeleton, CreateBoard, UserBoard } from "./_components";

export default function OrgBoardsPage() {
  return (
    <div className="flex gap-4 flex-wrap">
      <CreateBoard />
      <BoardSkeleton />
      <UserBoard />
    </div>
  );
}
