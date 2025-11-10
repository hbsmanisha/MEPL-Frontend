'use client';
import React, { useEffect, useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import LossSummaryCard from './LossSummaryCard';

// --- Circle Data Interface & OEECircle Component ---
interface CircleData {
  label: string;
  value: number; // The percentage value
  color: string;
  isMain?: boolean;
}

const OEECircle: React.FC<CircleData> = ({
  label,
  value,
  color,
  isMain = false,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // animation duration in ms
    const stepTime = 10; // update every 10ms
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setAnimatedValue(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const sizeClass = isMain
    ? 'w-36 h-36 sm:w-40 sm:h-40 lg:w-60 lg:h-60'
    : 'w-24 h-24 sm:w-28 sm:h-28';
  const valueSize = isMain ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl';
  const labelSize = isMain ? 'text-lg lg:text-xl' : 'text-sm lg:text-base';
  const strokeWidth = isMain ? 12 : 8;

  const pathColor =
    {
      blue: '#3B82F6',
      green: '#10B981',
      yellow: '#F59E0B',
      cyan: '#06B6D4',
    }[color] || '#3B82F6';

  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${sizeClass} mx-auto relative cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <CircularProgressbarWithChildren
        value={animatedValue}
        styles={buildStyles({
          pathColor: pathColor,
          trailColor: '#E5E7EB',
          strokeLinecap: 'round',
          pathTransitionDuration: 0.5,
        })}
        strokeWidth={strokeWidth}
      >
        <div className="flex flex-col items-center justify-center">
          <div className={`${valueSize} font-bold text-gray-800`}>
            {Math.round(animatedValue)}%
          </div>
          <div className={`text-gray-500 font-medium ${labelSize}`}>{label}</div>
        </div>
      </CircularProgressbarWithChildren>
    </motion.div>
  );
};

// --- Product Quantity Bar Sub-Component ---
const ProductQuantityBar: React.FC = () => {
  const actual = 9448;
  const expected = 8685;
  const target = 27000;

  const [animatedWidth, setAnimatedWidth] = useState(0);
  const actualWidth = (actual / target) * 100;

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = 10;
    const increment = actualWidth / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= actualWidth) {
        start = actualWidth;
        clearInterval(timer);
      }
      setAnimatedWidth(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [actualWidth]);

  return (
    <div className="mt-4 mb-6">
      <p className="text-sm font-semibold text-gray-700 mb-2">Product Quantity</p>

      <div className="relative h-4 bg-gray-200 rounded-full mb-3 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded-l-full"
          style={{ width: `${animatedWidth > 100 ? 100 : animatedWidth}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        ></motion.div>
      </div>

      <div className="flex justify-between text-center text-sm font-semibold">
        <div className="flex flex-col">
          <span className="text-blue-500 text-lg">{actual}</span>
          <span className="text-[#64748b] font-semibold text-xs sm:text-sm">
            Actual Quantity
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-lg">{expected}</span>
          <span className="text-[#64748b] font-semibold text-xs sm:text-sm">
            Expected Quantity
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 text-lg">{target}</span>
          <span className="text-[#64748b] font-semibold text-xs sm:text-sm">
            Target Quantity
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Main KPI Section Component ---
const KPISection: React.FC = () => {
  const oeeData: CircleData[] = [
    { label: 'OEE', value: 65, color: 'blue', isMain: true },
    { label: 'AVA', value: 89, color: 'green' },
    { label: 'EFF', value: 79, color: 'yellow' },
    { label: 'QUA', value: 93, color: 'cyan' },
  ];

  const mainOEE = oeeData.find((d) => d.isMain);
  const subKPIs = oeeData.filter((d) => !d.isMain);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 bg-gradient-to-br from-blue-50 to-white"
    >
      <p className="text-[20px] text-[#5c697d] font-semibold mb-4 border-b border-gray-200 pb-2">
        Key Performance Indicators
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
        {/* LEFT CARD: Main OEE + Sub Circles + Bar */}
        <div className="border border-gray-200 rounded-2xl p-6 shadow-md bg-white w-full">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-12">
            {/* Main OEE */}
            <div className="flex justify-center md:justify-center">
              {mainOEE && <OEECircle {...mainOEE} />}
            </div>

            {/* Right: Sub OEE Circles + Bar */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="flex justify-center md:justify-start gap-14">
                {subKPIs.map((kpi, index) => (
                  <OEECircle key={index} {...kpi} />
                ))}
              </div>
              <div className="w-full mt-4">
                <ProductQuantityBar />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: Loss Summary */}
        <div className="hidden lg:block">
          <LossSummaryCard />
        </div>
      </div>
    </motion.div>
  );
};

export default KPISection;
