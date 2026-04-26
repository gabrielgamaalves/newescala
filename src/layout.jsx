"use client";

import Sidebar from "./components/layout/Sidebar"
import { useState } from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <aside className="h-screen p-3">
        <Sidebar className="h-full" />
      </aside>
      {children}
    </div>
  )
}