import * as React from "react";
import S from "./ButtonControlGame.module.scss";
import { useRef, useState } from "react";
import jumpSound from "../../audio/drums.mp3";
import { resetTimeGame } from "../../store/reducers/PlayerReducer";
import { useDispatch } from "react-redux";
import { ReactComponent as FullScreen } from "../../img/fullscreen.svg";
import { ReactComponent as Restart } from "../../img/restar.svg";

const ButtonControlGame = (props) => {
  const toggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className={S.full}
        style={{ position: "relative", zIndex: "100000" }}
        onClick={() => {
          toggle();
        }}
      >
        <FullScreen />
      </div>
      {!props.onliFull && (
        <div
          style={{ position: "relative", zIndex: "100000" }}
          className={S.full}
          onClick={() => {
            props.restart();
            dispatch(resetTimeGame());
            props.changeOwner();
          }}
        >
          <Restart />
        </div>
      )}{" "}
      {/*<div style={{ position: "relative", zIndex: "99999" }}>*/}
      {/*  <input*/}
      {/*    value={spawn}*/}
      {/*    onInput={(e) => {*/}
      {/*      setSpawn((prevState) => e.target.value);*/}
      {/*    }}*/}
      {/*    type="text"*/}
      {/*    placeholder={"скорость движения"}*/}
      {/*  />*/}
      {/*  {" скорость движения сек"}*/}
      {/*  <input*/}
      {/*    value={move}*/}
      {/*    onInput={(e) => {*/}
      {/*      setMove((prevState) => e.target.value);*/}
      {/*    }}*/}
      {/*    type="text"*/}
      {/*    placeholder={"скорость появления "}*/}
      {/*  />*/}
      {/*  {"скорость появления сек "}*/}
      {/*  <div*/}
      {/*    onClick={() => {*/}
      {/*      props.typeGame(spawn * 1000, move * 1000);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    go*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ButtonControlGame;
