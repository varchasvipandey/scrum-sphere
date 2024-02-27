export enum Routes {
  SignIn = "/sign-in",
  SelectOrg = "/select-org",
  Dashboard = "/dashboard",
  OrgBoards = "/dashboard/[orgId]/boards",
  OrgAnalytics = "/dashboard/[orgId]/analytics",
  OrgSettings = "/dashboard/[orgId]/settings",
  OrgBilling = "/dashboard/[orgId]/billing",
  Board = "/board/[boardId]",
}

export const getOrgRoute = (orgId: string, route: Routes) => {
  return route.replace("[orgId]", orgId);
};

export const getBoardRoute = (boardId: string) => {
  return Routes.Board.replace("[boardId]", boardId);
};
