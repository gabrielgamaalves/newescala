"use client";

import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header";
// import { useState } from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <aside className="h-screen">
        <Sidebar className="h-full" />
      </aside>
      <Header />
      {children}
    </div>
  )
}