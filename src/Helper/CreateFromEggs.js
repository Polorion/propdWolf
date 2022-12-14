export const fromEggs = () => {
  const number = Math.floor(Math.random() * (5 - 1)) + 1;
  switch (number) {
    case 1: {
      return "activeEggsTopLeft";
    }
    case 2: {
      return "activeEggsBottomLeft";
    }
    case 3: {
      return "activeEggsTopRight";
    }
    case 4: {
      return "activeEggsBottomRight";
    }
  }
};
