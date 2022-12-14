import * as React from "react";
import ButtonControlGame from "./ButtonControlGame";
import { connect, useSelector } from "react-redux";
import {
  choiceOwner,
  gameOver,
  resetAllScore,
  runGame,
  setSpeedMoveEgg,
  setSpeedSpawnEdd,
} from "../../store/reducers/PlayerReducer";
import { resetAllChicken } from "../../store/reducers/ChickenReducer";
import {
  refreshOpenMandarin,
  restartAllEggs,
} from "../../store/reducers/OpenChickeReducer";
import { useEffect, useRef } from "react";

const ButtonControlGameContainer = (props) => {
  const gameover = useSelector((state) => state.player.missedEggs);
  const score = useSelector((state) => state.player.score);
  useEffect(() => {
    typeGame(1000 - score * 5, 1000 - score * 5);
  }, [score]);
  useEffect(() => {
    if (gameover > 0) {
      props.runGame(false);
      props.gameOver(true);
    }
  }, [gameover]);
  const changeOwner = () => {
    props.choiceOwner(null);
  };
  const changeRunGame = () => {
    props.runGame(false);
  };
  const restart = () => {
    props.resetAllScore();
    props.resetAllChicken();
    props.restartAllEggs();
    props.gameOver(false);
    props.refreshOpenMandarin();
    props.choiceOwner(null);
    props.runGame(false);
  };
  const typeGame = (spawn, speed) => {
    props.setSpeedSpawnEdd(spawn);
    props.setSpeedMoveEgg(speed);
  };
  return (
    <div
      style={{ position: "absolute", zIndex: "1000", top: "0%", left: "0%" }}
    >
      <ButtonControlGame
        onliFull={props.onliFull}
        changeOwner={changeOwner}
        changeRunGame={changeRunGame}
        restart={restart}
        gameIsRun={props.gameIsRun}
        typeGame={typeGame}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    owner: state.player.owner,
    gameIsRun: state.player.gameIsRun,

    activeEggsTopLeft: state.chicken.activeEggsTopLeft,
    activeEggsTopRight: state.chicken.activeEggsTopRight,
    activeEggsBottomRight: state.chicken.activeEggsBottomRight,
    activeEggsBottomLeft: state.chicken.activeEggsBottomLeft,
    positionPlayer: state.player.positionPlayer,
  };
};
export default connect(mapStateToProps, {
  choiceOwner,
  runGame,
  resetAllScore,
  resetAllChicken,
  refreshOpenMandarin,
  restartAllEggs,
  setSpeedSpawnEdd,
  setSpeedMoveEgg,
  gameOver,
})(ButtonControlGameContainer);
