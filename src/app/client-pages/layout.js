"use client";

import SidebarMenu from "@/components/client-view/navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <div className="flex h-screen">
        <SidebarMenu />
        <main className="flex-1 max-h-screen overflow-y-auto bg-white">
          {children}
          <footer className="text-center text-xs py-1 text-gray-500">
            © {new Date().getFullYear()} Toate drepturile rezervate. |{" "}
            <a href="/client-pages/privacy" className="underline text-blue-600">
              Politica de Confidențialitate
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}
