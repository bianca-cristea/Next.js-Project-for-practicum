"use client";

import SidebarMenu from "@/components/client-view/navbar";

export default function ClientLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SidebarMenu />
      <main className="h-screen w-3/4 overflow-y-auto p-4">{children}</main>
    </div>
  );
}
