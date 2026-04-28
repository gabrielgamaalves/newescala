"use client";

import { PiSidebarSimple } from "react-icons/pi";

export default function Header({ actions: { toggleSidebar } }) {
  return (
    <header className="p-default">
      <div className="py-default flex-start gap-5.5">
        <button className="cursor-pointer p-1 hover:bg-surface-tertiary rounded-md" onClick={() => toggleSidebar()}>
          <PiSidebarSimple className="size-icon" />
        </button>
        <h2>Bem vindo, Edjan</h2>
      </div>
    </header>
  );
}
