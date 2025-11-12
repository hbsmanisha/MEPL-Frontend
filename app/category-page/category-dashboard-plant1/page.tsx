"use client";

import FilterBar from "@/app/components/Filter";
import Header from "@/app/components/Header";
import ChartCard from "@/app/components/plant-dashboard/ChartCard";
import BarChartComponent from "@/app/components/plant-dashboard/charts/BarChartComponent";
import ParetoChart from "@/app/components/plant-dashboard/charts/ParetoChart";



export default function CategoryDashboard() {
  return (
    <div className="min-h-screen p-6">
      <Header title="Category Dashboard" lastUpdated="Today" />
      <div className="mb-6">
        <FilterBar />
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gradient-to-b from-[#f97316] to-[#ffb366] text-white font-semibold text-center rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
          Category <br /> 21.0 Lakh
        </div>
        <div className="bg-gradient-to-b from-[#7b47a8] to-[#b589d6] text-white font-semibold text-center rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
          Defect <br /> 21.0 Lakh
        </div>
        <div className="bg-gradient-to-b from-[#d4a017] to-[#f3d36b] text-white font-semibold text-center rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
          Formulation
        </div>
        <div className="bg-gradient-to-b from-[#2196f3] to-[#6ab8ff] text-white font-semibold text-center rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
          COPQ
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-10 space-y-10">
        {/* Top Row of Pareto Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Formulation" color="bg-[#d4a017]">
            <ParetoChart />
          </ChartCard>

          <ChartCard title="Defect" color="bg-[#d4a017]">
            <ParetoChart />
          </ChartCard>
        </div>

        {/* Middle Big Bar Chart */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4">
          <h3 className="text-center bg-[#d4a017] text-white text-sm font-semibold px-3 py-1 rounded-md inline-block mb-3">
            Part No Main
          </h3>
          <div className="h-72">
            <BarChartComponent />
          </div>
        </div>

        {/* Bottom Pareto Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="Rejects - Analysis 1" color="bg-[#d4a017]">
            <ParetoChart />
          </ChartCard>

          <ChartCard title="Rejects - Analysis 2" color="bg-[#d4a017]">
            <ParetoChart />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
