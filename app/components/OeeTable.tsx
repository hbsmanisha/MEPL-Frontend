'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OEEData {
  month: string;
  site: string;
  supervisor: string;
  oee: number;
  quality: number;
  performance: number;
  downtime: number;
  status: string;
  notes: string;
}

const OEETable: React.FC = () => {
  const data: OEEData[] = [
    { month: 'Jan', site: 'Plant A', supervisor: 'John Doe', oee: 65, quality: 93, performance: 79, downtime: 12.5, status: 'On Track', notes: 'No issues' },
    { month: 'Feb', site: 'Plant B', supervisor: 'Jane Smith', oee: 70, quality: 90, performance: 82, downtime: 8.2, status: 'Warning', notes: 'Minor machine maintenance' },
    { month: 'Mar', site: 'Plant C', supervisor: 'Alice Johnson', oee: 60, quality: 88, performance: 76, downtime: 15, status: 'Delayed', notes: 'Unexpected downtime' },
    { month: 'Apr', site: 'Plant A', supervisor: 'John Doe', oee: 75, quality: 92, performance: 85, downtime: 5.5, status: 'On Track', notes: 'Smooth operation' },
    { month: 'May', site: 'Plant B', supervisor: 'Jane Smith', oee: 80, quality: 94, performance: 89, downtime: 3, status: 'On Track', notes: 'Exceeded targets' },
    { month: 'Jun', site: 'Plant C', supervisor: 'Alice Johnson', oee: 72, quality: 91, performance: 81, downtime: 6.8, status: 'Warning', notes: 'Minor delay in shift' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto bg-gradient-to-br from-white via-[#f8fafc] to-[#f1f5f9] hover:from-[#f8fafc] hover:via-white hover:to-[#f8fafc] rounded-xl shadow-xl border border-gray-300 transition-all duration-500"
    >
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {['Month', 'Site', 'Supervisor', 'OEE (%)', 'Quality (%)', 'Performance (%)', 'Downtime (hrs)', 'Status', 'Notes'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-base font-semibold text-[#475569] uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <AnimatePresence>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, idx) => (
              <motion.tr
                key={item.month + item.site}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <td className="px-6 py-4 text-sm font-medium text-[#334155]">{item.month}</td>
                <td className="px-6 py-4 text-sm font-medium text-[#334155]">{item.site}</td>
                <td className="px-6 py-4 text-sm font-medium text-[#334155]">{item.supervisor}</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">{item.oee}%</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600">{item.quality}%</td>
                <td className="px-6 py-4 text-sm font-semibold text-yellow-600">{item.performance}%</td>
                <td className="px-6 py-4 text-sm text-red-600">{item.downtime}</td>

                {/* ✅ Status as Badge */}
                <td className="px-6 py-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold border 
                      ${item.status === 'On Track'
                        ? 'bg-green-100 text-green-700 border-green-300'
                        : item.status === 'Warning'
                        ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
                        : 'bg-red-100 text-red-700 border-red-300'
                      }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-[#475569]">{item.notes}</td>
              </motion.tr>
            ))}
          </tbody>
        </AnimatePresence>
      </table>
    </motion.div>
  );
};

export default OEETable;
