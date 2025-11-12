"use client";

import { motion } from "framer-motion";

interface ChartCardProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, color, children }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300"
    >
      <div className={`${color} text-white text-sm font-semibold px-3 py-1`}>
        {title}
      </div>
      <div className="p-3">{children}</div>
    </motion.div>
  );
}
