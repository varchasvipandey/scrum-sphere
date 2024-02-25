import { Routes } from "@/lib/routes";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { ActiveOrgHandler, SideNavDrawer } from "../";

export const AuthHeader = () => {
  return (
    <>
      <ActiveOrgHandler />
      <header className="flex justify-between items-center px-4 h-16 shadow-sm anim-fade-in--slow">
        <div className="flex items-center space-x-4">
          <span className="block lg:hidden">
            <SideNavDrawer />
          </span>
          <OrganizationSwitcher
            hidePersonal
            afterSelectOrganizationUrl={`${Routes.dashboard}/:id`}
            afterCreateOrganizationUrl={`${Routes.dashboard}/:id`}
            afterLeaveOrganizationUrl={Routes.selectOrg}
          />
        </div>
        <UserButton afterSignOutUrl="/" />
      </header>
    </>
  );
};
