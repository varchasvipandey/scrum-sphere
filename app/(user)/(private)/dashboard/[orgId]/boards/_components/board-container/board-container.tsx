export const BoardContainer = ({ children }: { children: JSX.Element }) => {
  return <div className="w-full sm:w-[20rem] h-[16rem] sm:h-[12rem] rounded-md shadow-md flex flex-col">{children}</div>;
};
