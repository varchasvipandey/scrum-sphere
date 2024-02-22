import { AuthHeader } from "./_components";

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
    </>
  );
}
