import * as React from "react";
import Chicken from "./Chicken/Chicken";
import { connect, useSelector } from "react-redux";
import {
  aggEgg,
  eggsDel,
  moveEgg,
} from "../../../store/reducers/ChickenReducer";
import { useEffect, useMemo, useRef } from "react";
import {
  missedEggs,
  setClearBag,
  upScore,
} from "../../../store/reducers/PlayerReducer";
import S from "./Chicken/Chicken.module.scss";
import scoreImg from "../../../img/player/score.png";
import {
  moveOpenEgg,
  startOpenEgg,
} from "../../../store/reducers/OpenChickeReducer";

const ChickenContainer = (props) => {
  const score = useSelector((state) => state.player.score);
  const missedEggs = useSelector((state) => state.player.missedEggs);

  const refPosition = useRef(props.positionPlayer);
  refPosition.current = props.positionPlayer;

  const refEggsLT = useRef();
  refEggsLT.current = props.activeEggsTopLeft;

  const refEggsLB = useRef();
  refEggsLB.current = props.activeEggsBottomLeft;

  const refEggsRT = useRef();
  refEggsRT.current = props.activeEggsTopRight;

  const refEggsRB = useRef();
  refEggsRB.current = props.activeEggsBottomRight;

  const eggMove = () => {
    props.moveEgg();
    props.setClearBag();
    props.moveOpenEgg();
  };
  const check = (yes) => {
    if (refPosition.current === "1" && refEggsLT.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsTopLeft");
    }
    if (refEggsLT.current.includes(5) && refPosition.current !== "1") {
      if (yes) {
        props.missedEggs();
        props.startOpenEgg({ type: "openChickenPositionLeft", chiken: 1 });
      }
    }
    if (refPosition.current === "3" && refEggsLB.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsBottomLeft");
    }
    if (refEggsLB.current.includes(5) && refPosition.current !== "3") {
      if (yes) {
        props.missedEggs();
        props.startOpenEgg({ type: "openChickenPositionLeft", chiken: 2 });
      }
    }

    if (refPosition.current === "2" && refEggsRT.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsTopRight");
    }
    if (refEggsRT.current.includes(5) && refPosition.current !== "2") {
      if (yes) {
        props.missedEggs();
        props.startOpenEgg({ type: "openChickenPositionRight", chiken: 3 });
      }
    }
    if (refPosition.current === "4" && refEggsRB.current.includes(5)) {
      props.upScore();
      props.eggsDel("activeEggsBottomRight");
    }
    if (refEggsRB.current.includes(5) && refPosition.current !== "4") {
      if (yes) {
        props.missedEggs();
        props.startOpenEgg({ type: "openChickenPositionRight", chiken: 4 });
      }
    }
  };

  useEffect(() => {
    let t;
    if (props.gameIsRun) {
      t = setInterval(() => {
        eggMove();
        setTimeout(() => {
          check(false);
        }, [0]);
        check(true);
      }, props.speedEggMove);
    }
    return () => {
      clearInterval(t);
      // check(false);
    };
  }, [props.gameIsRun, props.speedEggMove]);

  return (
    <div>
      <div className={S.score}>
        {" "}
        <p>{score}</p>{" "}
        <div className={S.img}>
          <img src={scoreImg} alt="" />
        </div>
      </div>
      <Chicken
        coordinates={{ top: 0 }}
        eggs={props.chickenTopLeft}
        activeEggs={props.activeEggsTopLeft}
        positionPlayer={props.positionPlayer}
        left={true}
      />{" "}
      <Chicken
        coordinates={{ top: 25 }}
        eggs={props.chickenBottomLeft}
        activeEggs={props.activeEggsBottomLeft}
        positionPlayer={props.positionPlayer}
        left={true}
      />{" "}
      <Chicken
        coordinates={{ top: 50 }}
        eggs={props.chickenTopRight}
        activeEggs={props.activeEggsTopRight}
        positionPlayer={props.positionPlayer}
        left={false}
      />{" "}
      <Chicken
        coordinates={{ top: 75 }}
        eggs={props.chickenBottomRight}
        activeEggs={props.activeEggsBottomRight}
        positionPlayer={props.positionPlayer}
        left={false}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    positionPlayer: state.player.positionPlayer,
    score: state.player.score,
    speedEggMove: state.player.speedEggMove,
    gameIsRun: state.player.gameIsRun,
    missedEggs: state.player.missedEggs,
    chickenTopLeft: state.chicken.chickenTopLeft,
    chickenBottomLeft: state.chicken.chickenBottomLeft,
    chickenTopRight: state.chicken.chickenTopRight,
    chickenBottomRight: state.chicken.chickenBottomRight,

    activeEggsTopLeft: state.chicken.activeEggsTopLeft,
    activeEggsTopRight: state.chicken.activeEggsTopRight,
    activeEggsBottomRight: state.chicken.activeEggsBottomRight,
    activeEggsBottomLeft: state.chicken.activeEggsBottomLeft,
  };
};
export default connect(mapStateToProps, {
  moveEgg,
  aggEgg,
  upScore,
  moveOpenEgg,
  eggsDel,
  startOpenEgg,
  setClearBag,
  missedEggs,
})(ChickenContainer);
