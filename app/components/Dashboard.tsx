import ChartCard from "./ChartCard";
import FilterBar from "./Filter";
import KPICard from "./KPICard";
import MachineCard from "./main-dashboard/MachineCard";
import OEECircularGroup from "./OEECard";
import OEETable from "./OeeTable";
import ProductionSummaryCard from "./ProductionSummaryCard";

export default function Dashboard() {
  const machines = [
    { id: "A-36", oee: 64, prodCost: "50k", wip: "2k", wipRs: "5k", copq: "3%", bd: 50, bdLoss: "5k" },
    { id: "A-33", oee: 62, prodCost: "45k", wip: "3k", wipRs: "4k", copq: "2%", bd: 40, bdLoss: "4k" },
    { id: "A-34", oee: 66, prodCost: "52k", wip: "1k", wipRs: "6k", copq: "1%", bd: 55, bdLoss: "5k" },
    { id: "D-55", oee: 70, prodCost: "60k", wip: "2k", wipRs: "5k", copq: "2%", bd: 45, bdLoss: "4k" },
  ];

  return (
    <main className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Filter Bar */}
      <div className="mb-6">
        <FilterBar />
      </div>

      {/* Machine Cards Section — 2 per row on tablet, 1 on mobile, 2 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center mb-10">
        {machines.map((m) => (
          <MachineCard key={m.id} {...m} />
        ))}
      </div>

      {/* OEE Circular Chart Group */}
      <div className="mb-10">
        {/* <OEECircularGroup /> */}
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <KPICard label="Overall OEE" value="65%" color="text-green-600" />
        <KPICard label="Availability" value="89%" trend={-5} />
        <KPICard label="Performance" value="79%" />
      </div>

      {/* Charts + Production Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ChartCard />
        <ProductionSummaryCard actual={9448} expected={8685} target={27000} rate={72} />
      </div>

      {/* OEE Table */}
      <div className="mt-10">
        <p className="text-[20px] text-[#5c697d] font-semibold mb-6">
          Production Performance Table
        </p>
        <OEETable />
      </div>
    </main>
  );
}
