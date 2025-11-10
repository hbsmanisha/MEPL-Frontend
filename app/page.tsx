// app/page.tsx
"use client";

import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import Dashboard from "@/app/components/Dashboard";

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}
