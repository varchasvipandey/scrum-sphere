"use client";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Routes, getOrgRoute } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { useOrganization } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const BoardIcon = getIcon("board");
const AnalyticsIcon = getIcon("analytics");
const SettingsIcon = getIcon("settings");
const BillingIcon = getIcon("billing");
const IsActiveIcon = getIcon("circle");

export const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { organization, isLoaded } = useOrganization();

  const orgId = organization?.id;

  const navItems = orgId ? getNavRoutes(orgId) : [];

  const handleOnClickItem = (href: string) => router.push(href);

  return (
    <div className={cn("flex flex-col items-start", isLoaded ? "space-y-2" : "space-y-4")}>
      {!isLoaded && Array.from({ length: navItems.length - 1 }).map((_, i) => <Skeleton key={i} className="h-10 w-full bg-primary/10" />)}

      {isLoaded &&
        navItems.map((item) =>
          item.type === "route" ? (
            <Button
              key={item.href}
              variant="nav"
              onClick={() => handleOnClickItem(item.href || "")}
              className={cn("w-full justify-start", pathname === item.href && "bg-primary/10 text-primary font-normal")}
              aria-label={item.label}
            >
              <span className="w-full flex items-center justify-between">
                <span className="flex">
                  {item.icon}
                  {item.label}
                </span>
                {pathname === item.href && <IsActiveIcon size={10} className="anim-fade-in fill-primary stroke-transparent" />}
              </span>
            </Button>
          ) : (
            <Separator key={item.id} className="w-2/3 mx-auto" />
          ),
        )}
    </div>
  );
};

const iconProps = { size: 20, className: "mr-2" };

const getNavRoutes = (orgId: string) => {
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
