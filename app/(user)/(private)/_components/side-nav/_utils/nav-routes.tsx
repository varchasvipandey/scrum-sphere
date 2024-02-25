import { getIcon } from "@/components/icons";
import { Routes, getOrgRoute } from "@/lib/routes";

const BoardIcon = getIcon("board");
const AnalyticsIcon = getIcon("analytics");
const SettingsIcon = getIcon("settings");
const BillingIcon = getIcon("billing");

const iconProps = { size: 20, className: "mr-2" };

export const getNavRoutes = (orgId: string) => {
  return [
    {
      type: "route",
      label: "Boards",
      href: getOrgRoute(orgId, Routes.orgBoards),
      icon: <BoardIcon {...iconProps} />,
    },
    {
      type: "route",
      label: "Analytics",
      href: getOrgRoute(orgId, Routes.orgAnalytics),
      icon: <AnalyticsIcon {...iconProps} />,
    },
    {
      type: "divider",
      id: 0,
    },
    {
      type: "route",
      label: "Settings",
      href: getOrgRoute(orgId, Routes.orgSettings),
      icon: <SettingsIcon {...iconProps} />,
    },
    {
      type: "route",
      label: "Billing",
      href: getOrgRoute(orgId, Routes.orgBilling),
      icon: <BillingIcon {...iconProps} />,
    },
  ];
};
