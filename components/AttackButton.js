"use client";

import { motion } from "framer-motion";
import { gameBounce } from "@/utils/animations";

export default function AttackButton({ onAttack }) {
  return (
    <motion.button
      {...gameBounce}
      type="button"
      onClick={() => onAttack("el mal")}
      whileHover={{ scale: 1.08, rotate: -2 }}
      whileTap={{ scale: 0.88, rotate: -5 }}
      className="attack-button"
    >
      Golpear con chipote chillon
    </motion.button>
  );
}
