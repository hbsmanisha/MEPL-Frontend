"use client";

import FilterBar from "../components/Filter";
import Header from "../components/Header";
import KPICard from "../components/plant-dashboard/KPICard";
import ChartCard from "../components/plant-dashboard/ChartCard";
import OEEChart from "../components/plant-dashboard/charts/OEEChart";

export default function PlantDashboard() {
  return (
    <div className=" min-h-screen p-6">
      <Header title="Plant Dashboard" lastUpdated="Today" />
      <div className="mb-6">
        <FilterBar />
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <KPICard title="Qty Prod / OEE" value="30K / 70%" color="orange" />
        <KPICard title="REI% / COPQ / QTY" value="3% / 12L / 1000" color="yellow" />
        <KPICard title="BD HRS / Loss" value="10 / 15K" color="purple" />
        <KPICard title="WIP / Cost" value="20K / 10L" color="blue" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <ChartCard title="OEE & TURNOVER/MONTH" color="bg-[#e27124]">
          <OEEChart />
        </ChartCard>

        <ChartCard title="REI% - 3  COPQ - 12L  QTY - 1000" color="bg-[#d5ad1a]">
          <OEEChart />
        </ChartCard>

        <ChartCard title="& TURNOVER LOSS DUE TO BD" color="bg-[#7548a6]">
          <OEEChart />
        </ChartCard>

        <ChartCard title="WIP - NOS & COST" color="bg-[#306998]">
          <OEEChart />
        </ChartCard>
      </div>
    </div>
  );
}
