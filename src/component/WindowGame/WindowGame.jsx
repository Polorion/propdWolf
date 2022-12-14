import * as React from "react";
import S from "./WindowGame.module.scss";

import MoveButton from "../MoveButton/MoveButton";
import PlayerContainer from "../Player/PlayerContainer";
import { useDispatch, useSelector } from "react-redux";

import { movePositionPlayer } from "../../store/reducers/PlayerReducer";
import ChickenContainer from "./ChickenContainer/ChickenContainer";
import { aggEgg } from "../../store/reducers/ChickenReducer";
import { fromEggs } from "../../Helper/CreateFromEggs";
import { useEffect, useRef, useState } from "react";
import ChoisePlayer from "../ChoicePlayer/ChoicePlayer";
import ButtonControlGameContainer from "../ButtonControlerGame/ButtonControlGameContainer";
import Timer from "../Timer/Timer";
import OpenChickenContainer from "../OpenChikenContainer/OpenChickenContainer";
import GameOver from "../GameOver/GameOver";

const WindowGame = () => {
  const ref = useRef();
  const owner = useSelector((state) => state.player.owner);
  const runGame = useSelector((state) => state.player.gameIsRun);
  const speedEggSpawn = useSelector((state) => state.player.speedEggSpawn);
  const gameOver = useSelector((state) => state.player.gameOver);

  const [h, setH] = useState(window.screen.availWidth);
  useEffect(() => {
    const test = document.querySelector(".test");
    setH(test.offsetHeight);
    const windowRaz = () => {
      const w = document.querySelector(".container").clientWidth;
      setH(test.offsetHeight);
    };
    window.addEventListener("resize", windowRaz);
    window.addEventListener("orientationchange", windowRaz);
    return () => {
      window.removeEventListener("resize", windowRaz);
      window.removeEventListener("orientationchange", windowRaz);
    };
  }, []);
  const dispatch = useDispatch();
  const BTN = [
    {
      position: "1",
    },
    {
      position: "3",
    },
    {
      position: "2",
    },
    {
      position: "4",
    },
  ];
  useEffect(() => {
    let t;
    if (runGame) {
      t = setInterval(() => {
        const from = fromEggs();
        dispatch(aggEgg(from));
      }, speedEggSpawn);
    }
    return () => {
      clearInterval(t);
    };
  }, [runGame, speedEggSpawn]);

  const changePosition = (pos) => {
    dispatch(movePositionPlayer(pos));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {owner ? (
        <div className={S.gameWindow}>
          <div
            className={"container"}
            ref={ref}
            style={{
              height: `${h}px`,

              width: `100%`,
            }}
          >
            {owner && <ButtonControlGameContainer />}
            <Timer />
            <ChickenContainer />
            <GameOver gameOver={gameOver} />
            <PlayerContainer />
            <OpenChickenContainer />
            <div className={S.buttonBody}>
              {BTN.map((el) => (
                <MoveButton
                  key={el.position}
                  position={el.position}
                  action={changePosition}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ChoisePlayer onliFull={true} owner={owner} />
      )}
    </div>
  );
};

export default WindowGame;
