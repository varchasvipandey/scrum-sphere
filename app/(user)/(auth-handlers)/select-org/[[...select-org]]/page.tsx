import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/routes";
import { OrganizationList, SignOutButton } from "@clerk/nextjs";

export default function OrgSelectionPage() {
  return (
    <div className="flex flex-col space-y-4">
      <OrganizationList hidePersonal afterSelectOrganizationUrl={`${Routes.dashboard}/:id`} afterCreateOrganizationUrl={`${Routes.dashboard}/:id`} />

      <Button variant="link" asChild>
        <SignOutButton>Sign out</SignOutButton>
      </Button>
    </div>
  );
}
