import * as React from "react";
import S from "./StartWindow.module.scss";
import topRabbit from "../../img/start/rabbitTop.png";
import bottomRabbit from "../../img/start/rabbitBottom.png";
import Fruit from "../../img/start/fruitInRabbit.png";
import boxes from "../../img/start/boxes.png";
import fruitBox from "../../img/start/fruitInBoxes.png";
import lamp from "../../img/start/lamp.png";
import dead from "../../img/start/dead.png";
import deadopen from "../../img/start/openDead.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gameIsStarted } from "../../store/reducers/PlayerReducer";
import ButtonControlGameContainer from "../ButtonControlerGame/ButtonControlGameContainer";

const StartWindow = (props) => {
  const [press, setPress] = useState(false);
  const [timer, setTimer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (press) {
      setTimeout(() => {
        setTimer(true);
      }, 3000);
      if (press) {
        setTimeout(() => {
          dispatch(gameIsStarted());
        }, 7000);
      }
    }
  }, [press]);
  return (
    <div className={S.body}>
      <ButtonControlGameContainer onliFull={true} />
      <h1 className={`${S.title}  ${press && S.active}`}>
        Добро пожаловать в игру от Italy&co. Собирайте Мандарины и обменивайте{" "}
        их на бонусы
      </h1>
      <div className={`${S.rabbitTop} ${press && S.active}`}>
        <div className={S.topR}>
          <img src={topRabbit} alt="" />
        </div>
        <div className={S.topF}>
          <img src={Fruit} alt="" />
        </div>
      </div>
      <div className={`${S.rabbitBotton} ${press && S.active}`}>
        <div className={S.BottonR}>
          <img src={bottomRabbit} alt="" />
        </div>
        <div className={S.BottonF}>
          <img src={Fruit} alt="" />
        </div>
      </div>
      <div className={`${S.boxes} ${press && S.active}`}>
        <div className={S.boxes}>
          <img src={boxes} alt="" />
        </div>
        <div className={S.fruitBox}>
          <img src={fruitBox} alt="" />
        </div>
      </div>
      <div className={`${S.lamp} ${press && S.active}`}>
        <div className={S.lamp}>
          <img src={lamp} alt="" />
        </div>
      </div>{" "}
      {press && (
        <div className={`${S.dead} ${press && S.active}`}>
          <img className={S.img} src={timer ? deadopen : dead} alt="" />
        </div>
      )}{" "}
      {press && (
        <div className={S.fruits}>
          <div className={S.manarin}>
            <img src={Fruit} alt="" />
          </div>{" "}
          <div className={S.manarin}>
            <img src={Fruit} alt="" />
          </div>{" "}
          <div className={S.manarin}>
            <img src={Fruit} alt="" />
          </div>{" "}
          <div className={S.manarin}>
            <img src={Fruit} alt="" />
          </div>{" "}
        </div>
      )}
      {!press && (
        <button
          onClick={() => {
            setPress((prevState) => !prevState);
            props.playSound();
          }}
          className={S.StartGame}
        >
          Начать игру
        </button>
      )}
    </div>
  );
};

export default StartWindow;
