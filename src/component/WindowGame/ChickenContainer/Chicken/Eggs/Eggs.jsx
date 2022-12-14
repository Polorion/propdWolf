import * as React from "react";
import S from "./Eggs.module.scss";
import egg from "../../../../../img/player/fruit.png";

const Eggs = (props) => {
  return (
    <div
      className={`${S.eggBody} ${props.active && S.active}`}
      style={{
        position: "relative",
        left: `${0}%`,
        top: `${props.position}%`,
        // transform: `rotate(${
        //   props.left ? props.position + 20 : props.position - 20
        // }deg)  `,
      }}
    >
      <img src={egg} alt="" />
    </div>
  );
};

export default Eggs;
