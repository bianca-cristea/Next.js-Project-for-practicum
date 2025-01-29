// "use client";
// import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
// import ClientEducationView from "@/components/client-view/education";
// import ClientHomeView from "@/components/client-view/home";
// import ClientPassionsView from "@/components/client-view/passions";
// import ClientResearchView from "@/components/client-view/research";
// import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
// import ClientTeachingView from "@/components/client-view/teaching";
// import Navbar from "@/components/client-view/navbar";
// import dotenv from "dotenv";
// import SidebarMenu from "@/components/client-view/navbar";
// import { useState } from "react";
// dotenv.config();

// async function extractAllDatas(currentSection) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}${currentSection}/get`,
//     {
//       method: "GET",
//       cache: "no-store",
//     }
//   );
//   const data = await res.json();
//   return data && data.data;
// }

// export default async function Home() {
//   const homeSectionData = await extractAllDatas("home");
//   const softwareEngineeringSectionData = await extractAllDatas(
//     "software-engineering"
//   );
//   const educationSectionData = await extractAllDatas("education");
//   const researchSectionData = await extractAllDatas("research");
//   const teachingSectionData = await extractAllDatas("teaching");
//   const competitiveProgrammingSectionData = await extractAllDatas(
//     "competitive-programming"
//   );
//   const passionsSectionData = await extractAllDatas("passions");

//   // return (
//   //   <div className="flex h-screen">
//   //     <Navbar />
//   //     <main className="h-full w-3/4 overflow-x-auto">
//   //       <ClientHomeView data={homeSectionData} />
//   //       <ClientSoftwareEngineeringView data={softwareEngineeringSectionData} />
//   //       <ClientEducationView data={educationSectionData} />
//   //       <ClientResearchView data={researchSectionData} />
//   //       <ClientTeachingView data={teachingSectionData} />
//   //       <ClientCompetitiveProgrammingView
//   //         data={competitiveProgrammingSectionData}
//   //       />
//   //       <ClientPassionsView data={passionsSectionData} />
//   //     </main>
//   //   </div>
//   // );
// "use client";

// import SidebarMenu from "@/components/client-view/navbar";
// import { useState, useEffect } from "react";

// async function extractAllDatas(currentSection) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}${currentSection}/get`,
//     {
//       method: "GET",
//       cache: "no-store",
//     }
//   );
//   const data = await res.json();
//   return data?.data || null;
// }

// export default function Home() {
//   const [activeComponent, setActiveComponent] = useState("ClientHomeView");
//   const [data, setData] = useState({});
//   useEffect(() => {
//     async function fetchData() {
//       const homeData = await extractAllDatas("home");
//       const softwareEngineeringData = await extractAllDatas(
//         "software-engineering"
//       );
//       const educationData = await extractAllDatas("education");
//       const researchData = await extractAllDatas("research");
//       const teachingData = await extractAllDatas("teaching");
//       const competitiveProgrammingData = await extractAllDatas(
//         "competitive-programming"
//       );
//       const passionsData = await extractAllDatas("passions");

//       setData({
//         home: homeData,
//         "software-engineering": softwareEngineeringData,
//         education: educationData,
//         research: researchData,
//         teaching: teachingData,
//         "competitive-programming": competitiveProgrammingData,
//         passions: passionsData,
//       });
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <SidebarMenu setActiveComponent={setActiveComponent} data={data} />
//       <main className="h-full w-3/4 overflow-x-auto p-6">
//         {activeComponent}
//       </main>
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import SidebarMenu from "@/components/client-view/navbar";

// // ✅ Importăm componentele care vor fi afișate
// import ClientHomeView from "@/components/client-view/home";
// import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
// import ClientEducationView from "@/components/client-view/education";
// import ClientResearchView from "@/components/client-view/research";
// import ClientTeachingView from "@/components/client-view/teaching";
// import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
// import ClientPassionsView from "@/components/client-view/passions";

// // ✅ Mapăm componentele pentru a le folosi dinamic
// const componentMap = {
//   home: ClientHomeView,
//   "software-engineering": ClientSoftwareEngineeringView,
//   education: ClientEducationView,
//   research: ClientResearchView,
//   teaching: ClientTeachingView,
//   "competitive-programming": ClientCompetitiveProgrammingView,
//   passions: ClientPassionsView,
// };

// async function extractAllDatas(currentSection) {
//   try {
//     const url = `${process.env.NEXT_PUBLIC_API_URL}${currentSection}/get`;
//     console.log("Fetching:", url);

//     const res = await fetch(url, {
//       method: "GET",
//       cache: "no-store",
//     });

//     if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

//     const data = await res.json();
//     return data?.data || null;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// }

// export default function Home() {
//   const [activeComponent, setActiveComponent] = useState("home");
//   const [data, setData] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const homeData = await extractAllDatas("home");
//       const softwareEngineeringData = await extractAllDatas(
//         "software-engineering"
//       );
//       const educationData = await extractAllDatas("education");
//       const researchData = await extractAllDatas("research");
//       const teachingData = await extractAllDatas("teaching");
//       const competitiveProgrammingData = await extractAllDatas(
//         "competitive-programming"
//       );
//       const passionsData = await extractAllDatas("passions");

//       setData({
//         home: homeData,
//         "software-engineering": softwareEngineeringData,
//         education: educationData,
//         research: researchData,
//         teaching: teachingData,
//         "competitive-programming": competitiveProgrammingData,
//         passions: passionsData,
//       });
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <SidebarMenu setActiveComponent={setActiveComponent} data={data} />

//       <main className="h-full w-3/4 overflow-x-auto p-6">
//         {componentMap[activeComponent] ? (
//           React.createElement(componentMap[activeComponent], {
//             data: data[activeComponent],
//           })
//         ) : (
//           <p>Select a section</p>
//         )}
//       </main>
//     </div>
//   );
// }
"use client";

import SidebarMenu from "@/components/client-view/navbar";
import { useState, useEffect } from "react";

// ✅ Importăm componentele pentru fiecare secțiune
import ClientHomeView from "@/components/client-view/home";
import ClientSoftwareEngineeringView from "@/components/client-view/software-engineering";
import ClientEducationView from "@/components/client-view/education";
import ClientResearchView from "@/components/client-view/research";
import ClientTeachingView from "@/components/client-view/teaching";
import ClientCompetitiveProgrammingView from "@/components/client-view/competitive-programming";
import ClientPassionsView from "@/components/client-view/passions";

// ✅ Creăm un obiect care mapază secțiunile la componentele respective
const componentMap = {
  home: ClientHomeView,
  "software-engineering": ClientSoftwareEngineeringView,
  education: ClientEducationView,
  research: ClientResearchView,
  teaching: ClientTeachingView,
  "competitive-programming": ClientCompetitiveProgrammingView,
  passions: ClientPassionsView,
};

async function extractData(currentSection) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${currentSection}/get`,
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
  }, [activeComponent]); // Fetch-ul se face doar când activeComponent se schimbă

  const ActiveComponent = componentMap[activeComponent];

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Aici treci funcția setActiveComponent ca prop */}
      <SidebarMenu setActiveComponent={setActiveComponent} />

      <main className="h-full w-3/4 overflow-x-auto p-6">
        {ActiveComponent ? (
          <ActiveComponent data={data[activeComponent]} />
        ) : (
          <p>Select a section</p>
        )}
      </main>
    </div>
  );
}
