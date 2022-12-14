// const ChangePositionEggs = "CHANGE_POSITION_EGGS";
// const AddEggs = "ADD_EGGS";
// const DeleteEggs = "DELETE_EGGS";
// const MoveAllEggs = "MOVE_ALL_EGGS";
// const startGameOrStop = "GAME_START_OR_STOP";
// const setScore = "SET_SCORE";
// const moveOneEggs = "MOVE_ONE_EGGS";
// const intervalChange = "INTERVAL_CHANGE";
//
// export const AddEggsMore = (from) => {
//   return {
//     type: AddEggs,
//     from,
//   };
// };
// export const changeInterval = (number) => {
//   return {
//     type: intervalChange,
//     number,
//   };
// };
// export const moveOneEgg = (id, from) => {
//   return {
//     type: moveOneEggs,
//     id,
//     from,
//   };
// };
// export const upScore = () => {
//   return {
//     type: setScore,
//   };
// };
// export const gameStartOrStop = () => {
//   return {
//     type: startGameOrStop,
//   };
// };
// export const MoveEggsAll = () => {
//   return {
//     type: MoveAllEggs,
//   };
// };
// export const moveEggs = (id) => {
//   return {
//     type: ChangePositionEggs,
//     id,
//   };
// };
// export const deleteEgg = (id, from) => {
//   return {
//     type: DeleteEggs,
//     id,
//     from,
//   };
// };
//
// export const movePosition = (position) => {
//   return {
//     type: ChangePositionWolf,
//     position,
//   };
// };
//
// const initionalState = {
//   leftTopEggs: [],
//   leftBottomEggs: [],
//   rightTopEggs: [],
//   rightBottomEggs: [],
//   position: "1",
//   start: false,
//   score: 0,
//   interval: 5000,
// };
//
// const MainRecucer = (state = initionalState, action) => {
//   switch (action.type) {
//     case "CHANGE_POSITION":
//       return {
//         ...state,
//         position: action.position,
//       };
//     case "INTERVAL_CHANGE":
//       return {
//         ...state,
//         interval: action.number,
//       };
//     case "SET_SCORE":
//       return {
//         ...state,
//         score: state.score + 1,
//       };
//     case "MOVE_ONE_EGGS":
//       return {
//         ...state,
//         [action.from]: state[action.from].map((el) => {
//           return el.id === action.id
//             ? { ...el, position: el.position + 1 }
//             : el;
//         }),
//       };
//     case "GAME_START_OR_STOP":
//       return {
//         ...state,
//         start: !state.start,
//       };
//     case "MOVE_ALL_EGGS":
//       return {
//         ...state,
//         leftTopEggs: state.leftTopEggs.map((el) => {
//           return { ...el, position: el.position + 1 };
//         }),
//       };
//     case "DELETE_EGGS":
//       return {
//         ...state,
//         [action.from]: state[action.from].map((el) => el.id !== action.id),
//       };
//     case "ADD_EGGS":
//       return {
//         ...state,
//         [action.from]: [
//           ...state[action.from],
//           { id: Math.floor(Math.random() * (100 - 1 + 1)) + 1, position: 1 },
//         ],
//       };
//     case "CHANGE_POSITION_EGGS":
//       return {
//         ...state,
//         leftTopEggs: state.leftTopEggs.map((el) => {
//           return el.id === action.id
//             ? { ...el, position: el.position + 1 }
//             : { ...el };
//         }),
//       };
//
//     default:
//       return state;
//   }
// };
// export default MainRecucer;
