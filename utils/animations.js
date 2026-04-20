export const gameBounce = {
  initial: { scale: 0.82, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 300, damping: 18 }
};

export const hitEffect = {
  animate: {
    x: [0, -10, 10, -10, 10, 0]
  },
  transition: { duration: 0.3 }
};
