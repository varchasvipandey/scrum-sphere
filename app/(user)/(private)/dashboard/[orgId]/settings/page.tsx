import { OrganizationProfile } from "@clerk/nextjs";

export default function OrgSettingsPage() {
  return (
    <div>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: "w-full h-[80vh]",
            card: "shadow-none rounded-none",
          },
        }}
      />
    </div>
  );
}
