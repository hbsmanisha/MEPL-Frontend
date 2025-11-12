"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", oee: 90, turnover: 80, downtime: 60 },
  { month: "Feb", oee: 85, turnover: 75, downtime: 55 },
  { month: "Mar", oee: 88, turnover: 78, downtime: 50 },
  { month: "Apr", oee: 82, turnover: 70, downtime: 45 },
  { month: "May", oee: 84, turnover: 72, downtime: 40 },
  { month: "Jun", oee: 87, turnover: 74, downtime: 38 },
];

export default function OEEChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-64"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" tick={{ fill: "#555", fontSize: 12 }} />
          <YAxis tick={{ fill: "#555", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="oee"
            stroke="#e27124"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="turnover"
            stroke="#306998"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="downtime"
            stroke="#d5ad1a"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
