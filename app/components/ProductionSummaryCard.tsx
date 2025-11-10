'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

type Props = {
  actual: number;
  expected: number;
  target: number;
  rate: number;
};

const ProductionSummaryBars: React.FC<Props> = ({ actual, expected, target, rate }) => {
  const [animatedActual, setAnimatedActual] = useState(0);
  const [animatedExpected, setAnimatedExpected] = useState(0);
  const [animatedTarget, setAnimatedTarget] = useState(0);

  // Animate each value smoothly on mount
  useEffect(() => {
    const duration = 1000; // animation duration in ms
    const stepTime = 10; // update every 10ms

    const animateValue = (targetValue: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let start = 0;
      const increment = targetValue / (duration / stepTime);
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          start = targetValue;
          clearInterval(timer);
        }
        setter(start);
      }, stepTime);
    };

    animateValue(actual, setAnimatedActual);
    animateValue(expected, setAnimatedExpected);
    animateValue(target, setAnimatedTarget);
  }, [actual, expected, target]);

  const progressData = [
    { label: 'Actual Quantity', value: animatedActual, max: target, color: 'bg-blue-500' },
    { label: 'Expected Quantity', value: animatedExpected, max: target, color: 'bg-green-500' },
    { label: 'Target Quantity', value: animatedTarget, max: target, color: 'bg-yellow-500' },
    { label: 'Production Rate', value: rate as number, max: 100, color: 'bg-[#4E56C0]' }, // assuming rate 0-100%
  ];

  return (
    <Card className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-[20px] text-[#5c697d] font-semibold mb-4">Production Summary</h2>

      <div className="space-y-4">
        {progressData.map((item, idx) => {
          const widthPercent = Math.min((item.value / item.max) * 100, 100);
          return (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="text-sm font-semibold text-gray-900">
                  {Math.round(item.value)}
                  {item.label === 'Production Rate' ? ' U/M' : ''}
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`${item.color} h-4 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${widthPercent}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.2 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ProductionSummaryBars;
