import * as React from "react";
import S from "./MoveButton.module.scss";
import jumpSound from "../../audio/jump.mp3";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  choiceOwner,
  gameOver,
  resetAllScore,
  runGame,
  setClearBag,
  setSpeedMoveEgg,
  setSpeedSpawnEdd,
  upScore,
} from "../../store/reducers/PlayerReducer";
import { eggsDel, resetAllChicken } from "../../store/reducers/ChickenReducer";
import {
  refreshOpenMandarin,
  restartAllEggs,
  startOpenEgg,
} from "../../store/reducers/OpenChickeReducer";

const MoveButton = (props) => {
  const refPosition = useRef(props.positionPlayer);

  const refEggsLT = useRef();

  const refEggsLB = useRef();

  const refEggsRT = useRef();

  const refEggsRB = useRef();

  const check = (pos) => {
    if (pos === "1" && refEggsLT.current.includes(5)) {
      props.upScore();

      props.eggsDel("activeEggsTopLeft");
    }

    if (pos === "3" && refEggsLB.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsBottomLeft");
    }

    if (pos === "2" && refEggsRT.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsTopRight");
    }

    if (pos === "4" && refEggsRB.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsBottomRight");
    }
  };

  const audioRef = useRef();

  const playSound = () => {
    audioRef.current.playbackRate = 3.0;
    audioRef.current.volume = 0.1;
    audioRef.current.play();
  };

  return (
    <div
      onClick={() => {
        props.setClearBag();
        refPosition.current = props.positionPlayer;
        refEggsLT.current = props.activeEggsTopLeft;
        refEggsLB.current = props.activeEggsBottomLeft;
        refEggsRT.current = props.activeEggsTopRight;
        refEggsRB.current = props.activeEggsBottomRight;
        props.action(props.position);
        playSound();
        check(props.position);
      }}
      className={`${S.btn} ${props.position}`}
    >
      <audio ref={audioRef} src={jumpSound}></audio>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    owner: state.player.owner,
    gameIsRun: state.player.gameIsRun,
    score: state.player.score,

    activeEggsTopLeft: state.chicken.activeEggsTopLeft,
    activeEggsTopRight: state.chicken.activeEggsTopRight,
    activeEggsBottomRight: state.chicken.activeEggsBottomRight,
    activeEggsBottomLeft: state.chicken.activeEggsBottomLeft,
    positionPlayer: state.player.positionPlayer,
  };
};
export default connect(mapStateToProps, {
  choiceOwner,
  eggsDel,
  runGame,
  resetAllScore,
  resetAllChicken,
  refreshOpenMandarin,
  restartAllEggs,
  setSpeedSpawnEdd,
  setSpeedMoveEgg,
  startOpenEgg,
  gameOver,
  setClearBag,
  upScore,
})(MoveButton);
