"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

import { useState } from "react";

export default function Layout({ children }) {

  const [activeSidebar, setActiveSidebar] = useState(!true)
  function toggleSidebar () {
    setActiveSidebar(!activeSidebar)
  }

  return (
    <div className="flex">
      <Sidebar className="h-full" active={activeSidebar} />
      <div className="flex flex-col flex-1">
        <Header className="w-full" actions={{toggleSidebar}}/>
        <main className="px-default">{children}</main>
      </div>
    </div>
  );
}
