const changeActiveEgg = "CHANGE_ACTIVE_EGG";
const eggStart = "EGG_START";
const resetChicken = "RESET_CHICKEN";
const delEggs = "DEL_EGGS";

export const eggsDel = (from) => {
  return {
    type: delEggs,
    from,
  };
};

export const aggEgg = (from) => {
  return {
    type: eggStart,
    from,
  };
};
export const moveEgg = () => {
  return {
    type: changeActiveEgg,
  };
};
export const resetAllChicken = () => {
  return {
    type: resetChicken,
  };
};
const initialState = {
  chickenTopLeft: [
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
  activeEggsTopLeft: [],
  chickenBottomLeft: [
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
  activeEggsBottomLeft: [],
  chickenTopRight: [
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
  activeEggsTopRight: [],
  chickenBottomRight: [
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
  activeEggsBottomRight: [],
};

const chickenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEL_EGGS": {
      return {
        ...state,
        [action.from]: state[action.from].filter((el) => el !== 5),
        activeEggsTopLeft: state.activeEggsTopLeft.filter((el) => el !== 5),
      };
    }
    case "EGG_START": {
      return {
        ...state,
        [action.from]: [0, ...state[action.from]],
      };
    }
    case "RESET_CHICKEN": {
      return {
        ...state,
        activeEggsTopLeft: [],
        activeEggsBottomLeft: [],
        activeEggsTopRight: [],
        activeEggsBottomRight: [],
      };
    }
    case "CHANGE_ACTIVE_EGG": {
      return {
        ...state,
        activeEggsTopLeft: state.activeEggsTopLeft
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
        activeEggsBottomLeft: state.activeEggsBottomLeft
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
        activeEggsTopRight: state.activeEggsTopRight
          .map((el) => {
            return el + 1;
          })
          .filter((el) => {
            return el < 6;
          }),
        activeEggsBottomRight: state.activeEggsBottomRight
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
export default chickenReducer;
