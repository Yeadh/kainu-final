export const logoVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
