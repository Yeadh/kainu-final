export const mobileNavVariants = {
  initial: {
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    opacity: 0,
  },
  open: {
    top: "-5px",
    right: "-10px",
    width: 278,
    height: 329,
    opacity: 1,
    transition: {
      duration: 0.75,
      opacity: {
        delay: 0.2,
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    opacity: 0,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectice1 = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.65,
      opacity: {
        duration: 0.35,
      },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectice2 = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { delay: 0.9 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
