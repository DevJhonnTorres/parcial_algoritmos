"use client";

import { AnimatePresence, motion } from "framer-motion";
import AttackButton from "@/components/AttackButton";
import EnemyCard from "@/components/EnemyCard";
import EnergyBar from "@/components/EnergyBar";
import { sectionsById } from "@/data/sections";
import { gameBounce } from "@/utils/animations";

function HUD({ combo, energy, status }) {
  return (
    <section className="hud">
      <div className="hud-card">
        <span className="hud-label">Estado del heroe</span>
        <p className="hud-value">{status}</p>
      </div>
      <div className="hud-card">
        <span className="hud-label">Energia</span>
        <EnergyBar value={energy} />
      </div>
      <div className="hud-card">
        <span className="hud-label">Combo actual</span>
        <p className="hud-value">x{combo}</p>
      </div>
    </section>
  );
}

function HomeSection({ onAttack, combo }) {
  return (
    <div className="section-stack">
      <div className="glass-panel hero-panel">
        <div className="hero-heading">
          <p className="section-kicker">Modo videojuego activo</p>
          <h1 className="hero-title">
            El <span>Chapulin Colorado</span> entro a la arena
          </h1>
          <p className="hero-copy">
            Interfaz tipo HUD, energia reactiva, accesos rapidos y microinteracciones
            en cada clic para que la app se sienta como una mini experiencia arcade.
          </p>
          <div className="status-chip">Todo bajo control</div>
        </div>

        <div className="hero-media">
          <div className="stat-grid">
            <motion.div {...gameBounce} className="stat-card">
              <strong>Radar</strong>
              <p>Detecta problemas antes de que exploten.</p>
            </motion.div>
            <motion.div {...gameBounce} transition={{ ...gameBounce.transition, delay: 0.08 }} className="stat-card">
              <strong>Chipote</strong>
              <p>Golpe critico disponible al instante.</p>
            </motion.div>
            <motion.div {...gameBounce} transition={{ ...gameBounce.transition, delay: 0.16 }} className="stat-card">
              <strong>Antenitas</strong>
              <p>Alertas premium con energia dramatica.</p>
            </motion.div>
          </div>
          <motion.img
            src="/images/chapulin-hero-real.png"
            alt="Heroe Chapulin"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
            className="hero-art hero-photo"
          />
        </div>
      </div>

      <div className="content-grid">
        <div className="glass-panel hero-panel">
          <p className="section-kicker">Ataque principal</p>
          <h2 className="section-heading">Feedback inmediato</h2>
          <p className="hero-copy">
            Cada accion responde con escala, golpe, combo y energia. No es una pagina
            estatica: es una interfaz con feeling de juego.
          </p>
          <AttackButton onAttack={onAttack} />
          {combo > 0 ? <div className="combo-banner">COMBO x{combo} 🔥</div> : null}
        </div>

        <div className="glass-panel side-panel">
          <p className="section-kicker">Objetivo actual</p>
          <h2 className="section-heading">Protege la ciudad</h2>
          <div className="mission-meter">
            <strong>Avance de la mision</strong>
            <div className="meter-line">
              <span style={{ width: "78%" }} />
            </div>
            <p className="hero-copy">El HUD mantiene el ritmo visual con progreso y estados vivos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollectionSection({ title, kicker, items }) {
  return (
    <div className="section-stack">
      <div className="glass-panel hero-panel">
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-heading">{title}</h2>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <motion.article
            key={item.title}
            {...gameBounce}
            whileHover={{ y: -8, scale: 1.02 }}
            className="info-card glass-panel"
          >
            <strong>
              {item.icon} {item.title}
            </strong>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function EnemiesSection({ enemies, onAttack, combo }) {
  return (
    <div className="section-stack">
      <div className="glass-panel hero-panel">
        <p className="section-kicker">Spawn de enemigos</p>
        <h2 className="section-heading">Arena de combate</h2>
        <p className="hero-copy">Haz clic en cada enemigo para disparar el efecto de golpe y subir el combo.</p>
        {combo > 0 ? <div className="combo-banner">Cadena activa x{combo}</div> : null}
      </div>

      <div className="enemy-grid">
        {enemies.map((enemy) => (
          <EnemyCard key={enemy.name} enemy={enemy} onAttack={onAttack} />
        ))}
      </div>
    </div>
  );
}

function AbilitiesSection({ abilities }) {
  return (
    <div className="section-stack">
      <div className="glass-panel hero-panel">
        <p className="section-kicker">Kit de habilidades</p>
        <h2 className="section-heading">Poderes del heroe</h2>
        <div className="ability-grid">
          {abilities.map((ability) => (
            <motion.article
              key={ability.title}
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              className="ability-card"
            >
              <strong>
                {ability.icon} {ability.title}
              </strong>
              <p>{ability.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function AlliesSection({ allies }) {
  return (
    <div className="section-stack">
      <div className="glass-panel hero-panel">
        <p className="section-kicker">Red de apoyo</p>
        <h2 className="section-heading">Aliados y refuerzos</h2>
      </div>
      <div className="ally-grid">
        {allies.map((ally) => (
          <motion.article key={ally.title} whileHover={{ scale: 1.02, y: -6 }} className="info-card glass-panel">
            <strong>
              {ally.icon} {ally.title}
            </strong>
            <p>{ally.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function renderSection(sectionId, onAttack, combo) {
  const section = sectionsById[sectionId];

  switch (sectionId) {
    case "Inicio":
      return <HomeSection combo={combo} onAttack={onAttack} />;
    case "Enemigos":
      return <EnemiesSection combo={combo} enemies={section.items} onAttack={onAttack} />;
    case "Habilidades":
      return <AbilitiesSection abilities={section.items} />;
    case "Aliados":
      return <AlliesSection allies={section.items} />;
    default:
      return <CollectionSection kicker={section.kicker} items={section.items} title={section.title} />;
  }
}

export default function Content({ combo, deferredSection, energy, onAttack, section, status }) {
  return (
    <div className="app-layout">
      <div />
      <div className="content-wrap">
        <HUD combo={combo} energy={energy} status={status} />

        <AnimatePresence mode="wait">
          <motion.section
            key={deferredSection}
            initial={{ scale: 0.94, opacity: 0, y: 26 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.04, opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {renderSection(section, onAttack, combo)}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
