"use client";

import { Button } from "@/components/ui/button";
import { useAuth, useUser, SignOutButton } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  const { userId } = useAuth();

  return (
    <div>
      {user?.firstName}
      <br />
      {userId}
      <br />
      <Button asChild>
        <SignOutButton>Sign Out</SignOutButton>
      </Button>
    </div>
  );
}
