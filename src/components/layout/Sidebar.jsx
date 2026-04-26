"use client";

import { Sidebar as FbSidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

import { PiHouseSimple, PiCalendarDots, PiUsersThree } from "react-icons/pi";

export function Profile() {
  return (
    <div className="p-2 flex gap-2 items-center justify-start">
      <img src="https://api.dicebear.com/9.x/glass/svg?seed=Edjan" className="size-9 rounded-full" />
      <div className="">
        <h4 className="leading-4">Edjan Barbosa</h4>
        <h6 className="text-sm">Admin</h6>
      </div>
    </div>
  )
}

export default function Sidebar({ className }) {
  return (
    <FbSidebar aria-label="Default sidebar example" className={twMerge(className, "rounded-2xl")}
      theme={{
        root: {
          inner: "rounded-md"
        },
        item: {
          icon: {
            base: "size-5 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          }
        }
      }}
    >
      <Profile />

      <SidebarItems className="mt-3">
        <SidebarItemGroup>
          <SidebarItem href="#" icon={PiHouseSimple}>
            Início
          </SidebarItem>
          <SidebarItem href="#" icon={PiCalendarDots}>
            Escalas
          </SidebarItem>
          <SidebarItem href="#" icon={PiUsersThree} >
            Profissionais
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </FbSidebar>
  );
}