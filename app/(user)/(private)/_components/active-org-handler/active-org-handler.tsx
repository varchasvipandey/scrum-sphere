"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const ActiveOrgHandler = () => {
  const params = useParams();
  const orgId = params?.orgId as string;

  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (orgId && setActive) setActive({ organization: orgId });
  }, [orgId, setActive]);

  return null;
};
