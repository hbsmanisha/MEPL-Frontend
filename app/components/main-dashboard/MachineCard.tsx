"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

interface MachineCardProps {
  id: string;
  oee: number;
  prodCost: string;
  wip: string;
  wipRs: string;
  copq: string;
  bd: number;
  bdLoss: string;
}

const MachineCard: React.FC<MachineCardProps> = ({
  id,
  oee,
  prodCost,
  wip,
  wipRs,
  copq,
  bd,
  bdLoss,
}) => {
  const handleClick = (section: string) => {
    alert(`Clicked on ${section} of ${id}`);
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#93b4ff] to-[#c3d7ff] rounded-2xl shadow-xl flex flex-col justify-center items-center p-4 w-[90%] sm:w-[380px] md:w-[420px] lg:w-[740px] min-h-[280px] hover:shadow-blue-300 transition-all"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", duration: 0.8, stiffness: 120 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-between items-center w-full gap-6">
        {/* Left Info */}
        <div className="flex flex-col gap-3 w-[210px] text-sm font-semibold z-10">
          <div
            className="bg-[#e66b2b] text-white px-3 py-2 rounded-md text-center shadow hover:bg-[#ff7b2a] transition"
            onClick={() => handleClick("WIP")}
          >
            WIP-OK<br />Nos-{wip} Rs-{wipRs}
          </div>
          <div
            className="bg-[#e66b2b] text-white px-3 py-2 rounded-md text-center shadow hover:bg-[#ff7b2a] transition"
            onClick={() => handleClick("COPQ")}
          >
            COPQ-Rej:<br />{copq}
          </div>
        </div>

        {/* Animated Circle */}
        <motion.div
          className="relative flex justify-center items-center w-[28vw] max-w-[180px] min-w-[120px] aspect-square flex-shrink-0"
          onClick={() => handleClick("OEE Circle")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full border-[8px] sm:border-[10px] border-yellow-400 shadow-[0_0_25px_rgba(255,200,0,0.5)]"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px rgba(255,200,0,0.4)",
                "0 0 40px rgba(255,200,0,0.8)",
                "0 0 20px rgba(255,200,0,0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner ring */}
          <div className="absolute inset-0 m-[10%] rounded-full border-[6px] border-yellow-300 opacity-90" />

          {/* Circular progress */}
          <div className="absolute inset-0 m-[20%] bg-white rounded-full flex justify-center items-center shadow-inner">
            <CircularProgressbar
              value={oee}
              text={id}
              styles={buildStyles({
                textColor: "#047857",
                pathColor: "#f59e0b",
                trailColor: "#e5e7eb",
                textSize: "24px",
              })}
            />
          </div>
        </motion.div>

        {/* Right Info */}
        <div className="flex flex-col gap-3 w-[210px] text-sm font-semibold z-10">
          <div
            className="bg-[#e66b2b] text-white px-3 py-2 rounded-md text-center shadow hover:bg-[#ff7b2a] transition"
            onClick={() => handleClick("OEE Info")}
          >
            OEE-{oee}<br />Prod Cost-{prodCost}
          </div>
          <div
            className="bg-[#e66b2b] text-white px-3 py-2 rounded-md text-center shadow hover:bg-[#ff7b2a] transition"
            onClick={() => handleClick("BD Info")}
          >
            BD-{bd}<br />Turnover loss {bdLoss}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MachineCard;
