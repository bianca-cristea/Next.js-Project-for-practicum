"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "teaching", label: "Teaching" },
  { id: "competitive-programming", label: "Competitive Programming" },
  { id: "passions", label: "Passions" },
];

export default function SidebarMenu() {
  const pathname = usePathname();
  const activeLink = pathname.split("/").pop();

  return (
    <nav className="overflow-x-auto justify-center flex flex-col items-center border-r border-blue-700 w-2/4 md:w-1/4 p-6 h-full space-y-6">
      <img
        className="h-auto w-full lg:w-1/2 m-0"
        src="https://unibuc.ro/wp-content/uploads/2019/02/Logo-UB-vertical-COLOR.jpg"
        alt="University logo"
      />
      <div className="space-y-4 w-full font-semibold text-sm">
        {menuItems.map((item) => (
          <Link key={item.id} href={`/client-pages/${item.id}`}>
            <div
              className={`px-4 text-xs md:text-sm lg:text-md py-2 cursor-pointer block text-center ${
                activeLink === item.id
                  ? "text-blue-700 font-bold border-l-4 border-blue-700"
                  : "text-black hover:text-blue-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
