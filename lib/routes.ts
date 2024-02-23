export enum Routes {
  signIn = "/sign-in",
  selectOrg = "/select-org",
  dashboard = "/dashboard",
  orgBoards = "/dashboard/[orgId]/boards",
  orgAnalytics = "/dashboard/[orgId]/analytics",
  orgSettings = "/dashboard/[orgId]/settings",
  orgBilling = "/dashboard/[orgId]/billing",
}

export const getOrgRoute = (orgId: string, route: Routes) => {
  return route.replace("[orgId]", orgId);
};
