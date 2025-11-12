"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { category: "A", defects: 80, percent: 80 },
  { category: "B", defects: 40, percent: 90 },
  { category: "C", defects: 20, percent: 95 },
  { category: "D", defects: 10, percent: 98 },
  { category: "E", defects: 5, percent: 100 },
];

export default function ParetoChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip />
          <Bar dataKey="defects" barSize={25} fill="#d4a017" radius={[4, 4, 0, 0]} />
          <Line
            type="monotone"
            dataKey="percent"
            stroke="#ff7300"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
