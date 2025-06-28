"use client";

import SidebarMenu from "@/components/client-view/navbar";
import Head from "next/head";
import { usePathname } from "next/navigation";

const metaDataMap = {
  "/client-pages/home": {
    title: "Pagina principală - Profesor Marius Dumitran",
    description:
      "Bine ai venit pe pagina principală a profesorului Marius Dumitran.",
  },
  "/client-pages/software-engineering": {
    title: "Software Engineering - Profesor Marius Dumitran",
    description: "Proiecte și resurse pentru software engineering.",
  },
  "/client-pages/education": {
    title: "Educație - Profesor Marius Dumitran",
    description:
      "Informații despre cursurile și educația oferită de profesorul Dumitran.",
  },
  "/client-pages/research": {
    title: "Cercetare - Profesor Marius Dumitran",
    description:
      "Detalii despre cercetările și publicațiile profesorului Dumitran.",
  },
  "/client-pages/teaching": {
    title: "Predare - Profesor Marius Dumitran",
    description:
      "Metode și resurse pentru activitatea didactică a profesorului Dumitran.",
  },
  "/client-pages/competitive-programming": {
    title: "Programare Competitivă - Profesor Marius Dumitran",
    description: "Materiale și informații despre programarea competitivă.",
  },
  "/client-pages/passions": {
    title: "Pasiuni - Profesor Marius Dumitran",
    description: "Descoperă pasiunile și interesele profesorului Dumitran.",
  },
};

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const meta = metaDataMap[pathname] || metaDataMap["/client-pages"];

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="flex h-screen">
        <SidebarMenu activeLink={pathname.replace("/client-pages/", "")} />
        <main className="h-screen w-4/5 overflow-auto p-6">{children}</main>
      </div>
    </>
  );
}
