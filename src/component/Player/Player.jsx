import * as React from "react";
import S from "./Player.module.scss";

import Basket from "./Basket/Basket";

const Player = (props) => {
  return (
    <div
      className={S.player}
      style={{
        left: `${props.left ? props.left : 0}% `,
      }}
    >
      <img
        className={`${S.img} ${props.active && S.active}`}
        src={props.img}
        alt=""
      />
    </div>
  );
};

export default Player;
