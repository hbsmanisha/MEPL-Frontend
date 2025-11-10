import ChartCard from "./ChartCard";
import FilterBar from "./Filter";
import KPICard from "./KPICard";
import OEECircularGroup from "./OEECard";
import OEETable from "./OeeTable";
import ProductionSummaryCard from "./ProductionSummaryCard";

export default function Dashboard() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div>
       <FilterBar/>
      </div>
      <div className="mb-8">
        <OEECircularGroup />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KPICard label="Overall OEE" value="65%" color="text-green-600" />
       <KPICard label="Availability" value="89%" trend={-5} />
        <KPICard label="Performance" value="79%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard />
        <ProductionSummaryCard
          actual={9448}
          expected={8685}
          target={27000}
          rate={72}
        />
      </div>
      <div className="mt-10">
        <p className="text-[20px] text-[#5c697d] font-semibold mb-6">Production Performance Table</p>
        <OEETable/>
      </div>
    </main>
  );
}
