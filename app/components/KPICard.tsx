'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from './Card';

type Props = {
  label: string;
  value: string;
  desc?: string;
  color?: string;
  trend?: number; // e.g., +5 or -3
};

export default function KPICard({
  label,
  value,
  desc,
  color,
  trend = 5, // default +5%
}: Props) {
  const isPositive = trend >= 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 cursor-pointer">
        <div className="flex flex-col gap-1">
          {/* Label */}
          <p className="text-[#64748b] text-base font-semibold">{label}</p>

          {/* Value */}
          <h3 className={`text-3xl font-bold ${color ?? 'text-blue-700'}`}>
            {value}
          </h3>

          {/* Trend indicator */}
          <div className="flex items-center gap-1 mt-1">
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-red-500" />
            )}
            <span
              className={`text-xs font-semibold ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isPositive ? '+' : ''}
              {trend}% from last month
            </span>
          </div>

          {/* Description (optional) */}
          {desc && <p className="text-xs text-gray-400 mt-1">{desc}</p>}
        </div>
      </Card>
    </motion.div>
  );
}
