import * as React from "react";
import S from "./ButtonControlGame.module.scss";
import { useRef, useState } from "react";
import jumpSound from "../../audio/drums.mp3";
import { resetTimeGame } from "../../store/reducers/PlayerReducer";
import { useDispatch } from "react-redux";
import { ReactComponent as FullScreen } from "../../img/fullscreen.svg";
import { ReactComponent as Restart } from "../../img/restar.svg";
import { openFullWindow } from "../../store/reducers/OpenChickeReducer";

const ButtonControlGame = (props) => {
  const dispatch = useDispatch();

  // const toggle = () => {
  //   dispatch(openFullWindow());
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   } else {
  //     document.exitFullscreen();
  //   }
  // };
  function toggle() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen;
    var cancelFullScreen =
      doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      cancelFullScreen.call(doc);
    }
  }

  return (
    <div>
      <div
        className={S.full}
        style={{ position: "relative", zIndex: "100000", color: "red" }}
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
      {/*    placeholder={"???????????????? ????????????????"}*/}
      {/*  />*/}
      {/*  {" ???????????????? ???????????????? ??????"}*/}
      {/*  <input*/}
      {/*    value={move}*/}
      {/*    onInput={(e) => {*/}
      {/*      setMove((prevState) => e.target.value);*/}
      {/*    }}*/}
      {/*    type="text"*/}
      {/*    placeholder={"???????????????? ?????????????????? "}*/}
      {/*  />*/}
      {/*  {"???????????????? ?????????????????? ?????? "}*/}
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
