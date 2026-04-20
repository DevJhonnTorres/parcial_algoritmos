"use client";

import { motion } from "framer-motion";

export default function EnergyBar({ value }) {
  return (
    <div className="energy-track" aria-label={`Energia ${value}%`} role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={value}>
      <motion.div
        className="energy-bar"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />
    </div>
  );
}
