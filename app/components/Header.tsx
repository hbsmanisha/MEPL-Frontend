export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800 ml-8 mt-6">Main Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Last updated: Today</span>
        <button className="p-2 rounded-full hover:bg-gray-100">
          🔔
        </button>
      </div>
    </header>
  );
}
