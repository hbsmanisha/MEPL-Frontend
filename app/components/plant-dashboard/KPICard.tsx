"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface KPICardProps {
  title: string;
  value: string;
  color: string;
}

export default function KPICard({ title, value, color }: KPICardProps) {
  const router = useRouter();

  // Navigate based on title
  const handleClick = () => {
    if (title.includes("Qty Prod")) {
      router.push("/category-page/category-dashboard-plant1");
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className={`cursor-pointer bg-gradient-to-b from-[#93b4ff] to-[#c3d7ff] rounded-xl p-4 text-center shadow-md hover:shadow-lg transition`}
    >
      <h3 className={`font-semibold text-lg text-gray-800`}>{title}</h3>
      <p className={`text-sm mt-2 text-gray-600`}>{value}</p>
    </motion.div>
  );
}
