'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import Card from './Card';

const data = [
  { month: 'Jan', oee: 65, quality: 93, performance: 79 },
  { month: 'Feb', oee: 70, quality: 90, performance: 82 },
  { month: 'Mar', oee: 60, quality: 88, performance: 76 },
  { month: 'Apr', oee: 75, quality: 92, performance: 85 },
  { month: 'May', oee: 80, quality: 94, performance: 89 },
  { month: 'Jun', oee: 72, quality: 91, performance: 81 },
];

export default function ChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="p-6 bg-gradient-to-br focus:outline-none from-white to-blue-50 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-[20px] text-[#5c697d] font-semibold mb-4 ">
          OEE Performance Trend
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 12 }} />
            <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#f1f5f9', borderRadius: '8px', border: 'none' }}
              itemStyle={{ color: '#111827', fontWeight: 500 }}
            />
            {/* OEE Line */}
            <Line
              type="monotone"
              dataKey="oee"
              stroke="#2563eb"
              strokeWidth={2}
              strokeDasharray="1000"
              strokeDashoffset="1000"
              isAnimationActive={true}
              animationDuration={1200}
            />
            {/* Quality Line */}
            <Line
              type="monotone"
              dataKey="quality"
              stroke="#22c55e"
              strokeWidth={2}
              strokeDasharray="1000"
              strokeDashoffset="1000"
              isAnimationActive={true}
              animationDuration={1200}
            />
            {/* Performance Line */}
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#f97316"
              strokeWidth={2}
              strokeDasharray="1000"
              strokeDashoffset="1000"
              isAnimationActive={true}
              animationDuration={1200}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
