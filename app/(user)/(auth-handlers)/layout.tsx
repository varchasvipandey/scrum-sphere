import { auth } from "@clerk/nextjs";
import { RedirectType, redirect } from "next/navigation";

export default async function AuthActionsLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();

  if (userId) redirect("/dashboard", RedirectType.replace);

  return <div className="h-screen flex flex-col justify-center items-center">{children}</div>;
}
