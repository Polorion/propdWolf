const ChangePositionPlayer = "CHANGE_POSITION_PLAYER";
const setScore = "SET_SCORE";
const setMiss = "SET_MISS";
const setOwner = "SET_OWNER";
const gameIsRun = "GAME_IS_RUN";
const resetScore = "RESET_SCORE";
const setSpawn = "SET_SPAWN";
const setSpeedMove = "SET_SPEED_MOVE";
const startedGame = "STARTED_GAME";
const timeGameSet = "TIME_GAME_SET";
const timeGameReset = "TIME_GAME_RESET";
const setGemaOver = "SET_GAME_OVER";
const clearBag = "CLEAR_BAG";
export const movePositionPlayer = (position) => {
  return {
    type: ChangePositionPlayer,
    position,
  };
};
export const setClearBag = () => {
  return {
    type: clearBag,
  };
};
export const gameOver = (boolean) => {
  return {
    type: setGemaOver,
    boolean,
  };
};
export const setGameTime = () => {
  return {
    type: timeGameSet,
  };
};
export const resetTimeGame = () => {
  return {
    type: timeGameReset,
  };
};
export const setSpeedSpawnEdd = (time) => {
  return {
    type: setSpawn,
    time,
  };
};
export const setSpeedMoveEgg = (time) => {
  return {
    type: setSpeedMove,
    time,
  };
};
export const resetAllScore = () => {
  return {
    type: resetScore,
  };
};
export const runGame = (bollean) => {
  return {
    type: gameIsRun,
    bollean,
  };
};
export const gameIsStarted = () => {
  return {
    type: startedGame,
  };
};
export const choiceOwner = (owner) => {
  return {
    type: setOwner,
    owner,
  };
};
export const upScore = () => {
  return {
    type: setScore,
  };
};
export const missedEggs = () => {
  return {
    type: setMiss,
  };
};

const initialState = {
  gameIsStart: false,
  positionPlayer: "1",
  score: 0,
  missedEggs: 0,
  owner: null,
  gameIsRun: false,
  speedEggSpawn: 2000,
  speedEggMove: 5200,
  typeGame: 1,
  timeIsGame: 180,
  gameOver: false,
  success: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GAME_OVER":
      return {
        ...state,
        gameOver: action.boolean,
      };
    case "CLEAR_BAG":
      return {
        ...state,
        success: false,
      };
    case "TIME_GAME_RESET":
      return {
        ...state,
        timeIsGame: 180,
      };
    case "STARTED_GAME":
      return {
        ...state,
        gameIsStart: true,
      };
    case "TIME_GAME_SET":
      return {
        ...state,
        timeIsGame: state.timeIsGame - 1,
      };
    case "CHANGE_POSITION_PLAYER":
      return {
        ...state,
        positionPlayer: action.position,
      };
    case "RESET_SCORE":
      return {
        ...state,
        score: 0,
        missedEggs: 0,
      };
    case "SET_OWNER":
      return {
        ...state,
        owner: action.owner,
      };
    case "GAME_IS_RUN":
      return {
        ...state,
        gameIsRun: action.bollean,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: state.score + 1,
        success: true,
      };
    case "SET_MISS":
      return {
        ...state,
        missedEggs: state.missedEggs + 1,
      };
    case "SET_SPAWN":
      return {
        ...state,
        speedEggSpawn: action.time,
      };
    case "SET_SPEED_MOVE":
      return {
        ...state,
        speedEggMove: action.time,
      };

    default:
      return state;
  }
};

export default playerReducer;
