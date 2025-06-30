"use client";

import SidebarMenu from "@/components/client-view/navbar";

export default function ClientLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SidebarMenu />
      <main className="flex-1 h-screen overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  );
}
