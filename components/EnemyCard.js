"use client";

import { motion, useAnimation } from "framer-motion";
import { hitEffect } from "@/utils/animations";

export default function EnemyCard({ enemy, onAttack }) {
  const controls = useAnimation();

  const handleHit = async () => {
    await controls.start(hitEffect.animate);
    onAttack(enemy.name);
  };

  return (
    <motion.article
      initial={{ x: 180, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 145, damping: 16 }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={handleHit}
      className="enemy-card"
    >
      <motion.div animate={controls}>
        <strong>
          {enemy.icon} {enemy.name}
        </strong>
        <p>{enemy.description}</p>
      </motion.div>
    </motion.article>
  );
}
