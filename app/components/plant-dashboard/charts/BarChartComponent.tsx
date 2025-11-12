"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Part A", value: 30 },
  { name: "Part B", value: 40 },
  { name: "Part C", value: 35 },
  { name: "Part D", value: 50 },
  { name: "Part E", value: 45 },
  { name: "Part F", value: 60 },
  { name: "Part G", value: 38 },
];

export default function BarChartComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#444" }} />
          <YAxis tick={{ fill: "#444" }} />
          <Tooltip />
          <Bar dataKey="value" fill="#f39c12" barSize={40} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
