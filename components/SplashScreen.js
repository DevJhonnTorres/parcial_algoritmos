"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="splash-screen"
    >
      <div className="splash-copy">
        <motion.img
          src="/images/chapulin-splash.png"
          alt="Chapulin Colorado"
          initial={{ scale: 0.5, rotate: -6, opacity: 0 }}
          animate={{ scale: 1.04, rotate: 0, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="splash-image"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="splash-kicker"
        >
          Sistema de defensa activado
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="splash-title"
        >
          Chapulin
          <br />
          Colorado
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="splash-subtitle"
        >
          Cargando mision, energia y arsenal del heroe mas valiente de la vecindad.
        </motion.p>
      </div>
    </motion.section>
  );
}
