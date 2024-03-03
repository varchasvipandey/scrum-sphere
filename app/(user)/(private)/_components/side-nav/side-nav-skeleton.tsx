import { Skeleton } from "@/components/ui/skeleton";
import { getNavRoutes } from "./_utils/nav-routes";
import { useDelayedAppearance } from "@/hooks/use-delayed-appearance";

const navItems = getNavRoutes("");

export const SideNavSkeleton = () => {
  const isVisible = useDelayedAppearance();

  if (!isVisible) return null;

  return (
    <div className="flex flex-col space-y-4 anim-fade-in">
      {navItems.map((item) => {
        if (item.type === "route") return <Skeleton key={item.href} className="h-10 w-full bg-primary/10" />;
        else if (item.type === "divider") return <Skeleton key={item.id} className="h-2 w-full text-base" />;
        else return null;
      })}
    </div>
  );
};
