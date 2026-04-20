"use client";

import { motion } from "framer-motion";
import { sections } from "@/data/sections";

export default function Sidebar({ activeSection, onSelect, open, setOpen }) {
  return (
    <>
      <button className="menu-toggle" onClick={() => setOpen((current) => !current)} type="button">
        <span>{open ? "X" : "☰"}</span>
        Menu tactico
      </button>

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: open ? 0 : -285 }}
        transition={{ type: "spring", stiffness: 135, damping: 18 }}
        className="sidebar"
      >
        <div className="sidebar-panel">
          <h2 className="sidebar-title">Centro de control</h2>
          <p className="sidebar-note">Navega como si fuera un HUD de videojuego.</p>

          <ul className="sidebar-list">
            {sections.map((section, index) => (
              <li key={section.id} className="sidebar-item">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97, rotate: -1 }}
                  onClick={() => onSelect(section.id)}
                  className={activeSection === section.id ? "is-active" : ""}
                >
                  <span>
                    {index + 1}. {section.id}
                  </span>
                  <small>{section.shortLabel}</small>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </>
  );
}
