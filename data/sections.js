export const sections = [
  { id: "Inicio", shortLabel: "HUD" },
  { id: "Misiones", shortLabel: "Quest" },
  { id: "Armas", shortLabel: "Loadout" },
  { id: "Enemigos", shortLabel: "Arena" },
  { id: "Habilidades", shortLabel: "Skills" },
  { id: "Aliados", shortLabel: "Squad" }
];

export const sectionsById = {
  Inicio: {
    title: "Inicio",
    kicker: "Panel principal",
    items: []
  },
  Misiones: {
    title: "Misiones activas",
    kicker: "Objetivos del episodio",
    items: [
      {
        icon: "🛰️",
        title: "Patrullar la vecindad",
        description: "Vigila zonas calientes y detecta problemas antes de que crezcan."
      },
      {
        icon: "🚨",
        title: "Rescate express",
        description: "Despliegue inmediato con animacion de impacto y notificacion sonora."
      },
      {
        icon: "🧠",
        title: "Plan improvisado",
        description: "Toma decisiones rapidas con look de consola tactica."
      },
      {
        icon: "🏁",
        title: "Final boss social",
        description: "Neutraliza el caos con feedback arcade y transicion cinematica."
      }
    ]
  },
  Armas: {
    title: "Arsenal del Chapulin",
    kicker: "Loadout premium",
    items: [
      {
        icon: "🔨",
        title: "Chipote chillon",
        description: "Ataque principal con escala, rotacion y sensacion de golpe."
      },
      {
        icon: "📡",
        title: "Antenitas de vinil",
        description: "Sistema de alerta con glow y lectura instantanea."
      },
      {
        icon: "💊",
        title: "Pastillas de chiquitolina",
        description: "Power-up ideal para secuencias sorprendentes."
      },
      {
        icon: "🪂",
        title: "Paracaidas tactico",
        description: "Soporte visual para entradas heroicas y escapes exagerados."
      }
    ]
  },
  Enemigos: {
    title: "Lista de enemigos",
    kicker: "Zona de combate",
    items: [
      {
        icon: "🦹",
        name: "Tripaseca",
        description: "Ataque frontal con resistencia media. Vulnerable al chipote."
      },
      {
        icon: "👺",
        name: "El Ruidoso",
        description: "Genera caos visual. Requiere respuesta rapida."
      },
      {
        icon: "🤖",
        name: "Robot del barrio",
        description: "Entra con slide agresivo y pierde estabilidad al impacto."
      },
      {
        icon: "🐍",
        name: "Serpiente electrica",
        description: "Movimientos erraticos. Buen objetivo para probar combos."
      }
    ]
  },
  Habilidades: {
    title: "Habilidades",
    kicker: "Power set",
    items: [
      {
        icon: "⚡",
        title: "Bounce de impacto",
        description: "Entrada con resorte para todo panel importante."
      },
      {
        icon: "💥",
        title: "Shake de golpe",
        description: "Respuesta inmediata al atacar enemigos o activar objetos."
      },
      {
        icon: "🔥",
        title: "Glow activo",
        description: "Hover brillante para elementos interactivos y botones."
      },
      {
        icon: "🌀",
        title: "Spawn cinematica",
        description: "Apariciones laterales y caidas heroicas con spring."
      }
    ]
  },
  Aliados: {
    title: "Aliados",
    kicker: "Equipo de apoyo",
    items: [
      {
        icon: "🛡️",
        title: "Escuadron vecinal",
        description: "Apoyo moral y reportes en tiempo real desde el barrio."
      },
      {
        icon: "📣",
        title: "Operadora central",
        description: "Mantiene el HUD sincronizado con alertas y objetivos."
      },
      {
        icon: "🧰",
        title: "Tecnico de gadgets",
        description: "Repara el loadout y prepara nuevas animaciones."
      },
      {
        icon: "🚁",
        title: "Refuerzo aereo",
        description: "Entrada dramatica para escenas de alto impacto."
      }
    ]
  }
};
