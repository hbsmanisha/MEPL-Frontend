'use client';
import React from 'react';
import { motion } from 'framer-motion';

const LossSummaryCard: React.FC = () => {
  const losses = [
    {
      label: 'Availability Loss',
      main: 'US 01:25:08',
      sub: 'PS 02:15:24',
    },
    {
      label: 'Production Loss',
      main: 'SS 00:28:05',
      sub: 'Slow 03:18:07',
    },
    {
      label: 'Quality Loss',
      main: 'PR 356',
      sub: 'SR 125',
    },
  ];

  return (
    <motion.section
      className="p-6 rounded-xl shadow-md border border-gray-200 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-[18px] text-[#5c697d] font-semibold mb-4">
        Loss Summary
      </h3>

      <div className="space-y-4">
        {losses.map((loss, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 border border-gray-300 rounded-lg p-3 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <p className="text-sm font-semibold text-[#64748b] mb-2">
              {loss.label}
            </p>
            <p className="text-blue-600 text-xl font-bold">
              {loss.main} / <span className="text-gray-700">{loss.sub}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LossSummaryCard;
