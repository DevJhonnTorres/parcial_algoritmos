const frequencies = {
  menu: [720, 920],
  hit: [180, 120, 90],
  alert: [420, 320, 520],
  powerup: [260, 420, 620]
};

export function playSound(type = "menu") {
  if (typeof window === "undefined") {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const notes = frequencies[type] || frequencies.menu;

  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startAt = context.currentTime + index * 0.08;

    oscillator.type = type === "hit" ? "square" : "triangle";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(type === "hit" ? 0.08 : 0.05, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.18);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startAt);
    oscillator.stop(startAt + 0.22);
  });

  setTimeout(() => {
    context.close().catch(() => {});
  }, 420);
}
