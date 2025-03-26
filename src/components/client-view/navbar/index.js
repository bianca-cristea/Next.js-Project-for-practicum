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

export default function SidebarMenu({ setActiveComponent, activeLink }) {
  return (
    <nav className="overflow-x-auto justify-center flex flex-col items-center border-r border-blue-700  w-2/4 md:w-1/4  p-6 h-full space-y-6">
      <img
        className="h-auto w-full lg:w-1/2 m-0"
        src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
        alt="University logo"
      />
      <div className="space-y-4 w-full font-semibold text-sm">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveComponent(item.id);
            }}
            className={`px-4 text-xs md:text-sm lg:text-md py-2 cursor-pointer block text-center ${
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
