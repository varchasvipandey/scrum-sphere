"use client";

import { SideNav } from "./_components";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex mt-4">
      <aside className="p-4 w-[16rem] hidden lg:block">
        <SideNav />
      </aside>
      <div className="p-4">{children}</div>
    </main>
  );
}
