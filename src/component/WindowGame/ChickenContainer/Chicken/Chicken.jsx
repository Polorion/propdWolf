import * as React from "react";
import S from "./Chicken.module.scss";
import Eggs from "./Eggs/Eggs";

const Chicken = (props) => {
  return (
    <div
      className={`${S.chickenBody}`}
      style={{
        left: `${props.coordinates?.top}%`,
      }}
    >
      <div className={S.chickenImg}></div>
      <div className={`${S.eggsBody} ${!props.left && S.right}`}>
        {props.eggs.map((el, i) => (
          <Eggs
            key={i}
            position={el.id * 20}
            active={props.activeEggs.includes(props.eggs[i].id)}
            number={el.id}
            left={props.left}
          />
        ))}
      </div>
    </div>
  );
};

export default Chicken;
