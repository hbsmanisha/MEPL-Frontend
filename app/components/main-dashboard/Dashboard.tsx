"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const machines = [
  {
    id: "A-36",
    oee: 64,
    prodCost: "50k",
    wip: "2k",
    wipRs: "5k",
    copq: "3%",
    bd: 50,
    bdLoss: "5k",
  },
  {
    id: "A-33",
    oee: 64,
    prodCost: "50k",
    wip: "2k",
    wipRs: "5k",
    copq: "3%",
    bd: 50,
    bdLoss: "5k",
  },
  {
    id: "A-34",
    oee: 64,
    prodCost: "50k",
    wip: "2k",
    wipRs: "5k",
    copq: "3%",
    bd: 50,
    bdLoss: "5k",
  },
  {
    id: "D-55",
    oee: 64,
    prodCost: "50k",
    wip: "2k",
    wipRs: "5k",
    copq: "3%",
    bd: 50,
    bdLoss: "5k",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#e5f1ff] p-6 flex flex-col">
      {/* 🔹 Filters Section */}
      <div className="bg-[#2f5fa6] p-4 rounded-t-xl flex justify-around text-white">
        {[...Array(4)].map((_, i) => (
          <select
            key={i}
            className="bg-[#6ca0dc] text-black px-3 py-2 rounded-md shadow-md"
          >
            <option>Filter {i + 1}</option>
          </select>
        ))}
      </div>

      {/* 🔹 Machine Grid */}
      <div className="grid grid-cols-2 gap-8 bg-[#5d87c5] p-6 rounded-b-xl">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="bg-[#a8c6ff] p-4 rounded-xl shadow-lg flex justify-between items-center"
          >
            {/* Left Info */}
            <div className="flex flex-col gap-2">
              <div className="bg-[#e66b2b] text-white px-3 py-1 rounded-md text-sm shadow">
                WIP-OK Nos-{machine.wip} Rs-{machine.wipRs}
              </div>
              <div className="bg-[#e66b2b] text-white px-3 py-1 rounded-md text-sm shadow">
                COPQ-Rej: {machine.copq}
              </div>
            </div>

            {/* Center OEE Circle */}
            <div className="relative w-32 h-32 flex justify-center items-center">
              <CircularProgressbar
                value={machine.oee}
                text={machine.id}
                styles={buildStyles({
                  textColor: "green",
                  pathColor: "orange",
                  trailColor: "#d0e1ff",
                  textSize: "20px",
                })}
              />
            </div>

            {/* Right Info */}
            <div className="flex flex-col gap-2 text-sm">
              <div className="bg-[#e66b2b] text-white px-3 py-1 rounded-md shadow">
                OEE-{machine.oee}
                <br />
                Prod Cost-{machine.prodCost}
              </div>
              <div className="bg-[#e66b2b] text-white px-3 py-1 rounded-md shadow">
                BD-{machine.bd}
                <br />
                Turnover loss {machine.bdLoss}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
