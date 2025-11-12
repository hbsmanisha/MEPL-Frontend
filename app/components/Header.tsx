"use client";

interface HeaderProps {
  title: string;
  lastUpdated?: string;
}

export default function Header({ title, lastUpdated = "Today" }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-6 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mt-6">
        {title}
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">
          Last updated: {lastUpdated}
        </span>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          🔔
        </button>
      </div>
    </header>
  );
}
