"use client";

import React from "react";
import {
  Home,
  Wallet,
  Repeat2,
  PiggyBank,
  BarChart3,
  Settings,
  Clock,
  LogOut,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useRouter, usePathname } from "next/navigation";

const menu = [
  { icon: Home, label: "Main Dashboard", href: "/" },
  { icon: Clock, label: "Plant Dashboard", href: "/plant-dashboard" },
  { icon: Wallet, label: "My Accounts", href: "/accounts" },
  { icon: Repeat2, label: "Transactions", href: "/transactions" },
  { icon: PiggyBank, label: "Budgets", href: "/budgets" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.aside
      className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 flex flex-col p-6"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white rotate-45 transform translate-x-px" />
          </div>
          <span className="text-gray-800">HBS OEE</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-grow space-y-2">
        {menu.map((item, index) => {
          const isActive = pathname.startsWith(item.href) && item.href !== "/"
            ? true
            : pathname === item.href;

          return (
            <motion.button
              key={item.label}
              onClick={() => router.push(item.href)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={clsx(
                "w-full flex items-center gap-3 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 text-left",
                isActive
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600 shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent"
              )}
              whileHover={{ scale: 1.03 }}
            >
              <item.icon
                className={clsx(
                  "w-5 h-5",
                  isActive ? "text-blue-600" : "text-gray-500"
                )}
              />
              <span
                className={clsx(
                  "font-semibold text-base",
                  isActive ? "text-blue-700" : "text-[#64748b]"
                )}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 mt-6 border-t border-gray-100">
        <div className="flex items-center justify-between text-gray-700 text-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-100">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="font-semibold text-[#64748b] text-base">HBS</p>
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
      </div>
    </motion.aside>
  );
}
