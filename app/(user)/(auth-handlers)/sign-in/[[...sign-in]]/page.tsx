import { Routes } from "@/lib/routes";
import { SignIn, auth } from "@clerk/nextjs";
import { RedirectType, redirect } from "next/navigation";

export default function SignInPage() {
  const { userId } = auth();

  // if (userId) redirect(Routes.selectOrg, RedirectType.replace);

  return <SignIn />;
}
