import { BoardContainer } from "../board-container/board-container";

export const UserBoard = () => {
  return (
    <BoardContainer>
      <div className="p-4 flex flex-col space-y-4">
        <h2 className="text-md font-bold">Website 1.0 development</h2>
        <p>New improved website with features like demo, feedback</p>
        <div>
          <div className="flex justify-between">
            <div>Activity</div>
            <div>Action</div>
          </div>
          <div>Date of creation</div>
        </div>
      </div>
    </BoardContainer>
  );
};
