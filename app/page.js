"use client";

import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useDeferredValue, useEffect, useState } from "react";
import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import SplashScreen from "@/components/SplashScreen";
import { playSound } from "@/utils/sound";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [section, setSection] = useState("Inicio");
  const [energy, setEnergy] = useState(82);
  const [combo, setCombo] = useState(0);
  const [status, setStatus] = useState("Radar encendido. Ciudad protegida.");

  const deferredSection = useDeferredValue(section);

  useEffect(() => {
    if (!combo) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setCombo(0);
      setStatus("Combo enfriado. Esperando siguiente impacto.");
    }, 2800);

    return () => clearTimeout(timer);
  }, [combo]);

  const handleSplashFinish = () => {
    setLoading(false);
    playSound("powerup");
  };

  const handleSectionChange = (nextSection) => {
    playSound("menu");
    setSidebarOpen(false);

    startTransition(() => {
      setSection(nextSection);
    });

    setStatus(`Seccion activa: ${nextSection}`);
  };

  const handleAttack = (enemyName = "objetivo") => {
    playSound("hit");
    setCombo((current) => current + 1);
    setEnergy((current) => Math.min(100, current + 4));
    setStatus(`Impacto confirmado sobre ${enemyName}.`);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onFinish={handleSplashFinish} />
        ) : (
          <motion.main
            key="app"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="game-shell"
          >
            <Sidebar
              activeSection={section}
              onSelect={handleSectionChange}
              open={sidebarOpen}
              setOpen={setSidebarOpen}
            />
            <Content
              combo={combo}
              deferredSection={deferredSection}
              energy={energy}
              onAttack={handleAttack}
              section={section}
              setEnergy={setEnergy}
              status={status}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
