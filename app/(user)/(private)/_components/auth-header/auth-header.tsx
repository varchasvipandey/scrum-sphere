import { Routes } from "@/lib/routes";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { ActiveOrgHandler } from "../";

export const AuthHeader = () => {
  return (
    <>
      <ActiveOrgHandler />
      <header className="flex justify-between items-center px-4 h-16 shadow-sm anim-fade-in--slow">
        <OrganizationSwitcher
          hidePersonal
          afterSelectOrganizationUrl={`${Routes.dashboard}/:id`}
          afterCreateOrganizationUrl={`${Routes.dashboard}/:id`}
          afterLeaveOrganizationUrl={Routes.selectOrg}
        />
        <UserButton afterSignOutUrl="/" />
      </header>
    </>
  );
};
