"use client";

import SidebarMenu from "@/components/client-view/navbar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      <SidebarMenu activeLink={pathname.replace("/client-pages/", "")} />
      <main className="h-screen w-4/5 overflow-auto p-6">{children}</main>
    </div>
  );
}
