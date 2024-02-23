import { AuthHeader } from "./_components";

export default function PrivateAuthorizedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
