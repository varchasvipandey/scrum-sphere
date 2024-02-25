"use client";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useOrganization } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { getNavRoutes } from "./utils/nav-routes";
import { SideNavSkeleton } from "./side-nav-skeleton";

const IsActiveIcon = getIcon("circle");

export const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { organization, isLoaded } = useOrganization();

  const orgId = organization?.id;

  const navItems = orgId ? getNavRoutes(orgId) : [];

  const handleOnClickItem = (href: string) => router.push(href);

  if (!isLoaded) return <SideNavSkeleton />;

  return (
    <div className="flex flex-col items-start space-y-2 anim-fade-in">
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
