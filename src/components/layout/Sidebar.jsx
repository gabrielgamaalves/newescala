"use client";

import { PiHouseSimple, PiCalendarDots, PiUsersThree } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const USER = {
  name: "Edjan Barbosa",
  role: "Admin",
};

export function Profile({ name, role }) {
  return (
    <div className="p-4 flex gap-2.5 items-center">
      <img
        src="https://api.dicebear.com/9.x/glass/svg?seed=Edjan"
        className="size-9 rounded-full ml-2"
      />
      <div className=".flex-start flex-col">
        <p className="leading-none">{name}</p>
        <small className="leading-none">{role}</small>
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
    href: "/"
  },
  {
    id: "tables",
    label: "Escalas",
    icon: PiCalendarDots,
    badge: undefined,
    href: "/tables"
  },
  {
    id: "professionals",
    label: "Profissionais",
    icon: PiUsersThree,
    badge: undefined,
    href: "/professionals"
  },
];

export default function Sidebar({ active }) {
  return (
    <aside
      className={twMerge(
        "h-screen py-default w-64 border-r overflow-hidden transition-fast",
        active ? "w-0!" : "",
      )}
      aria-label="Sidebar"
    >
      <Profile name={USER.name} role={USER.role} />
      <nav className="px-default">
        <ul className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.id} id={item.id}>
                <a
                  href={item.href}
                  className="w-full flex items-center gap-2.5 text-foreground p-1 px-4 hover:bg-surface-tertiary rounded-md"
                >
                  <item.icon className="size-icon text-muted" />
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
