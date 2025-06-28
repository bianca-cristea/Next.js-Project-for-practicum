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

const componentMap = {
  home: ClientHomeView,
  "software-engineering": ClientSoftwareEngineeringView,
  education: ClientEducationView,
  research: ClientResearchView,
  teaching: ClientTeachingView,
  "competitive-programming": ClientCompetitiveProgrammingView,
  passions: ClientPassionsView,
};

const metaDataMap = {
  home: {
    title: "Pagina principală - Profesor Marius Dumitran",
    description:
      "Bine ai venit pe pagina principală a profesorului Marius Dumitran.",
  },
  "software-engineering": {
    title: "Software Engineering - Profesor Marius Dumitran",
    description: "Proiecte și resurse pentru software engineering.",
  },
  education: {
    title: "Educație - Profesor Marius Dumitran",
    description:
      "Informații despre cursurile și educația oferită de profesorul Dumitran.",
  },
  research: {
    title: "Cercetare - Profesor Marius Dumitran",
    description:
      "Detalii despre cercetările și publicațiile profesorului Dumitran.",
  },
  teaching: {
    title: "Predare - Profesor Marius Dumitran",
    description:
      "Metode și resurse pentru activitatea didactică a profesorului Dumitran.",
  },
  "competitive-programming": {
    title: "Programare Competitivă - Profesor Marius Dumitran",
    description: "Materiale și informații despre programarea competitivă.",
  },
  passions: {
    title: "Pasiuni - Profesor Marius Dumitran",
    description: "Descoperă pasiunile și interesele profesorului Dumitran.",
  },
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

  useEffect(() => {
    const metaData = metaDataMap[activeComponent] || metaDataMap.home;

    document.title = metaData.title;

    const descriptionTag = document.querySelector("meta[name='description']");
    if (descriptionTag) {
      descriptionTag.setAttribute("content", metaData.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metaData.description;
      document.head.appendChild(meta);
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
