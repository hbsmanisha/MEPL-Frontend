"use client";

import Header from "@/app/components/Header";
import Dashboard from "@/app/components/Dashboard";

export default function Page() {
  return (
    <div>
      <Header title="Main Dashboard" lastUpdated="Today" />
      <Dashboard />
    </div>
  );
}
