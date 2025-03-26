"use client";

import SidebarMenu from "@/components/client-view/navbar";
import { useState, useEffect } from "react";

import ClientHomeView from "@/components/client-view/home";
import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
import ClientEducationView from "@/components/client-view/education";
import ClientResearchView from "@/components/client-view/research";
import ClientTeachingView from "@/components/client-view/teaching";
import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
import ClientPassionsView from "@/components/client-view/passions";
import Head from "next/head";

const componentMap = {
  home: ClientHomeView,
  "software-engineering": ClientSoftwareEngineeringView,
  education: ClientEducationView,
  research: ClientResearchView,
  teaching: ClientTeachingView,
  "competitive-programming": ClientCompetitiveProgrammingView,
  passions: ClientPassionsView,
};

export async function extractData(currentSection) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentSection}/get`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const sectionData = await extractData(activeComponent);
      setData((prevData) => ({
        ...prevData,
        [activeComponent]: sectionData,
      }));
      setLoading(false);
    };

    if (activeComponent) {
      fetchData();
    }
  }, [activeComponent]);

  const ActiveComponent = componentMap[activeComponent];

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Profesor Universitatea din București - Marius Dumitran</title>
        <meta
          name="description"
          content="Pagina profesorului Marius Dumitran de la Universitatea din București"
        />
        <meta
          name="keywords"
          content="Marius Dumitran, profesor, UniBuc, Universitatea din București, educație, UB"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Profesor Universitatea din București - Marius Dumitran"
        />
        <meta
          property="og:description"
          content="Pagina profesorului Marius Dumitran de la Universitatea din București"
        />
        <meta
          property="og:url"
          content="https://profesor-unibuc-dumitranmarius.vercel.app/"
        />
        <meta property="og:image" content="URL_imagine.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Profesor Universitatea din București - Marius Dumitran"
        />
        <meta
          name="twitter:description"
          content="Pagina profesorului Marius Dumitran de la Universitatea din București"
        />
        <meta name="twitter:image" content="URL_imagine.jpg" />
      </Head>
      <div className="flex h-screen">
        <SidebarMenu
          setActiveComponent={setActiveComponent}
          activeLink={activeComponent}
          className="h-screen w-2/4 md:1/4 lg:w-1/6"
        />
        <main className="h-screen w-2/4 md:3/4 lg:w-5/6 overflow-x-scroll">
          {ActiveComponent ? (
            <ActiveComponent data={data[activeComponent]} />
          ) : (
            <p>Select a section</p>
          )}
        </main>
      </div>
    </>
  );
}
