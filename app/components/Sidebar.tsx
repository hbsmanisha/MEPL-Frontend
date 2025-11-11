"use client";
import React, { useState } from "react";
import {
  Home,
  Wallet,
  Repeat2,
  PiggyBank,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Clock,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menu = [
  { icon: Home, label: "Main Dashboard", href: "#dashboard", isActive: true },
  { icon: Clock, label: "Plant Dashboard", href: "#history", isActive: false },
  { icon: Wallet, label: "My accounts", href: "#accounts", isActive: false },
  {
    icon: Repeat2,
    label: "Transactions",
    href: "#transactions",
    isActive: false,
  },
  { icon: PiggyBank, label: "Budgets", href: "#budgets", isActive: false },
  { icon: BarChart3, label: "Reports", href: "#reports", isActive: false },
  { icon: Settings, label: "Settings", href: "#settings", isActive: false },
];

function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 flex flex-col p-6"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top: Logo + Close */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white rotate-45 transform translate-x-px" />
            </div>
            <span className="text-gray-800">HBS OEE</span>
          </div>

          <button
            className="lg:hidden p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow space-y-2">
          {menu.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={onClose}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05, type: "spring" }}
              className={clsx(
                "flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200",
                item.isActive
                  ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent"
              )}
              whileHover={{ scale: 1.03 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[#64748b] font-semibold text-base">{item.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Bottom Account Info */}
        <motion.div
          className="p-4 mt-6 border-t border-gray-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gray-100">
                <User className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <p className="font-semibold text-[#64748b] text-base">HBS </p>
                <p className="text-xs text-gray-500">**** 6789</p>
              </div>
            </div>
            <button
              className="p-2 text-gray-400 hover:text-red-500 transition"
              aria-label="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.aside>
    </>
  );
}

// Main App
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 bg-white shadow-sm p-4 flex justify-between items-center z-30">
        <h1 className="text-xl font-bold text-gray-800">OEE Dashboard</h1>
        <button
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
