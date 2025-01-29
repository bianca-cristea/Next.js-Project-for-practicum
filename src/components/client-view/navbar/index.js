"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import ClientHomeView from "../home";
import ClientSoftwareEngineeringView from "../software-engineering";
import ClientEducationView from "../education";
import ClientResearchView from "../research";
import ClientTeachingView from "../teaching";
import ClientCompetitiveProgrammingView from "../competitive-programming";
import ClientPassionsView from "../passions";
// import AdminCompetitiveProgrammingView from "@/components/admin-view/competitive-programming";
// import AdminEducationView from "@/components/admin-view/education";
// import AdminHomeView from "@/components/admin-view/home";
// import AdminHPassionsView from "@/components/admin-view/passions";
// import AdminResearchView from "@/components/admin-view/research";
// import AdminSoftwareEngineeringView from "@/components/admin-view/software-engineering";
// import AdminTeachingView from "@/components/admin-view/teaching";

const menuItems = [
  {
    id: "home",
    label: "Home",
    component: <ClientHomeView />,
  },
  {
    id: "software-engineering",
    label: "Software Engineering",
    component: <ClientSoftwareEngineeringView />,
  },
  {
    id: "education",
    label: "Education",
    component: <ClientEducationView />,
  },
  {
    id: "research",
    label: "Research",
    component: <ClientResearchView />,
  },
  {
    id: "teaching",
    label: "Teaching",
    component: <ClientTeachingView />,
  },
  {
    id: "competitive-programming",
    label: "Competitive Programming",
    component: <ClientCompetitiveProgrammingView />,
  },

  {
    id: "passions",
    label: "Passions",
    component: <ClientPassionsView />,
  },
];
const componentsMap = {
  ClientHomeView: <ClientHomeView />,
  ClientSoftwareEngineeringView: <ClientSoftwareEngineeringView />,
  ClientEducationView: <ClientEducationView />,
  ClientResearchView: <ClientResearchView />,
  ClientTeachingView: <ClientTeachingView />,
  ClientCompetitiveProgrammingView: <ClientCompetitiveProgrammingView />,
  ClientHPassionsView: <ClientPassionsView />,
};
function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 cursor-pointer block text-center
        ${
          activeLink === item.id
            ? "text-blue-700 font-bold border-l-4 border-blue-700"
            : "text-black hover:text-blue-700 hover:bg-gray-100"
        }
      `}
    >
      {item.label}
    </LinkScroll>
  ));
}

// export default function SidebarMenu() {
//   const [activeLink, setActiveLink] = useState("passions");

//   return (
//     <nav className="overflow-x-auto flex flex-col items-center border-r border-blue-700 w-1/4 p-6 h-full space-y-6">
//       <img
//         className="h-auto w-1/2 m-0"
//         src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
//         alt="University logo"
//       />
//       <div className="space-y-4 w-full font-semibold text-sm">
//         <CreateMenus
//           setActiveLink={setActiveLink}
//           activeLink={activeLink}
//           getMenuItems={menuItems}
//         />
//       </div>
//     </nav>
//   );
// }
export default function SidebarMenu({ setActiveComponent }) {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="overflow-x-auto flex flex-col items-center border-r border-blue-700 w-1/4 p-6 h-full space-y-6">
      <img
        className="h-auto w-1/2 m-0"
        src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
        alt="University logo"
      />
      <div className="space-y-4 w-full font-semibold text-sm">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveLink(item.id);
              setActiveComponent(item.id); // Setează secțiunea activă în părinte
            }}
            className={`px-4 py-2 cursor-pointer block text-center ${
              activeLink === item.id
                ? "text-blue-700 font-bold border-l-4 border-blue-700"
                : "text-black hover:text-blue-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
