import * as React from "react";
import S from "./Timer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { runGame, setGameTime } from "../../store/reducers/PlayerReducer";

const Timer = () => {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.player.gameIsRun);
  const time = useSelector((state) => state.player.timeIsGame);

  const getPathTime = (time) => {
    return time.toString().padStart(2, "0");
  };
  const minin = getPathTime(Math.floor(time / 60));
  const second = getPathTime(time - minin * 60);
  useEffect(() => {
    let q;
    if (start) {
      q = setTimeout(() => {
        if (time > 0) {
          dispatch(setGameTime());
        } else {
          dispatch(runGame());
        }
      }, 1000);
    }
    return () => {
      clearInterval(q);
    };
  }, [time, start]);
  return (
    <div className={S.body}>
      <div className={S.time}>
        {minin}:{second}
      </div>
    </div>
  );
};

export default Timer;
