const moveOpen = "MOVE_OPEN";
const openStart = "OPEN_START";
const restartEgg = "RESTART_EGG";
const setMandarin = "SET_MANDARIN";
const openFull = "OPEN_FULL";

export const moveOpenEgg = () => {
  return {
    type: moveOpen,
  };
};
export const openFullWindow = () => {
  return {
    type: openFull,
  };
};

export const refreshOpenMandarin = () => {
  return {
    type: setMandarin,
  };
};
export const restartAllEggs = () => {
  return {
    type: restartEgg,
  };
};
export const startOpenEgg = (from) => {
  return {
    type: openStart,
    from,
  };
};

const initialState = {
  openChickenLeft: [
    {
      id: 1,
      position: 1,
    },
    {
      id: 2,
      position: 2,
    },
    {
      id: 3,
      position: 3,
    },
    {
      id: 4,
      position: 4,
    },
    {
      id: 5,
      position: 5,
    },
  ],
  openChickenPositionLeft: [],
  openChickenRight: [
    {
      id: 1,
      position: 1,
    },
    {
      id: 2,
      position: 2,
    },
    {
      id: 3,
      position: 3,
    },
    {
      id: 4,
      position: 4,
    },
    {
      id: 5,
      position: 5,
    },
  ],
  openChickenPositionRight: [],
  madarin: null,
  full: false,
};

const openChickenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MANDARIN": {
      return {
        ...state,

        madarin: null,
      };
    }
    case "OPEN_FULL": {
      return {
        ...state,

        full: !state.full,
      };
    }

    case "OPEN_START": {
      return {
        ...state,
        [action.from.type]: [1, ...state[action.from.type]],
        madarin: action.from.chiken,
      };
    }
    case "RESTART_EGG": {
      return {
        ...state,
        openChickenPositionLeft: [],
        openChickenPositionRight: [],
      };
    }
    case "MOVE_OPEN": {
      return {
        ...state,
        openChickenPositionLeft: state.openChickenPositionLeft
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
        openChickenPositionRight: state.openChickenPositionRight
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
      };
    }
    default:
      return state;
  }
};
export default openChickenReducer;
