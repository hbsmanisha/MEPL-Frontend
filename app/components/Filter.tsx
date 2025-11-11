
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState, ChangeEvent, FC } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, LucideIcon } from 'lucide-react';
import CustomSelect from './CustomDropDown';

// --- TypeScript Interfaces for Props ---
interface SelectFilterProps {
  label: string;
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

interface DateTimeFilterProps {
  label: string;
  type: 'date' | 'time';
  icon: LucideIcon;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Placeholder data
const prodLines: string[] = ['ProdLine01', 'ProdLine02', 'ProdLine03'];
const units: string[] = ['All Units', 'Unit A', 'Unit B'];

// --- Animated Filters ---
const SelectFilter: FC<SelectFilterProps> = ({ label, options, value, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col space-y-1 w-full sm:w-[calc(50%-0.5rem)] md:w-44 lg:w-48 cursor-pointer"
  >
    <CustomSelect
      label={label}
      options={options}
      value={value}
      onChange={(val: string) => onChange({ target: { value: val } } as any)}
    />
  </motion.div>
);

const DateTimeFilter: FC<DateTimeFilterProps> = ({ label, type, icon: Icon, value, onChange }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col space-y-1 w-full sm:w-[calc(50%-0.5rem)] md:w-44 lg:w-48"
  >
    <label className="text-sm font-semibold text-[#64748b]">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
      />
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      )}
    </div>
  </motion.div>
);

const FilterBar: FC = () => {
  const [prodLine, setProdLine] = useState<string>(prodLines[0]);
  const [unit, setUnit] = useState<string>(units[0]);
  const [startDate, setStartDate] = useState<string>('2025-10-10');
  const [startTime, setStartTime] = useState<string>('06:00');
  const [endDate, setEndDate] = useState<string>('2025-10-11');
  const [endTime, setEndTime] = useState<string>('06:00');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white  p-4 shadow-xl rounded-xl mb-6 border border-gray-200"
    >
      <div className="flex flex-wrap items-end gap-8">
        <SelectFilter
          label="Select ProdLine"
          options={prodLines}
          value={prodLine}
          onChange={(e) => setProdLine(e.target.value)}
        />
        <SelectFilter
          label="Select Unit"
          options={units}
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
        <DateTimeFilter
          label="Start Date"
          type="date"
          icon={Calendar}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <DateTimeFilter
          label="Start Time"
          type="time"
          icon={Clock}
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <DateTimeFilter
          label="End Date"
          type="date"
          icon={Calendar}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <DateTimeFilter
          label="End Time"
          type="time"
          icon={Clock}
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        {/* Animated Apply Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary-btn self-end"
          onClick={() => console.log('Filters Applied!')}
        >
          Apply Filters
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FilterBar;
