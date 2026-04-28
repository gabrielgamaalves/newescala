"use client";

// import { Sidebar as FbSidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
// import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { PiHouseSimple, PiCalendarDots, PiUsersThree } from "react-icons/pi";

const USER = {
  name: "Edjan Barbosa",
  role: "Admin"
}

export function Profile({ name, role }) {
  return (
    <div className="p-4 flex gap-2.5 items-center">
      <img
        src="https://api.dicebear.com/9.x/glass/svg?seed=Edjan"
        className="size-9 rounded-full ml-2"
      />
      <div className="">
        <h4 className="leading-4">{name}</h4>
        <h6 className="text-sm">{role}</h6>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  {
    id: "home",
    label: "Início",
    icon: PiHouseSimple,
    badge: undefined,
  },
  {
    id: "tables",
    label: "Escalas",
    icon: PiCalendarDots,
    badge: undefined,
  },
  {
    id: "professionals",
    label: "Profissionais",
    icon: PiUsersThree,
    badge: undefined,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen py-default w-64 border-r" aria-label="Sidebar">
      <Profile name={USER.name} role={USER.role} />
      <nav className="px-default">
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.id} id={item.id}>
                <a
                  href="#"
                  className="w-full flex items-center gap-2.5 text-foreground p-1 px-4 hover:bg-surface-tertiary rounded-md"
                >
                  <item.icon className="size-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
