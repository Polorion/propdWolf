import * as React from "react";
import S from "./ChoicePlayer.module.scss";
import { useEffect, useRef } from "react";

const Persona = (props) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current.closest(".slick-center"));
  }, []);
  return (
    <button
      ref={ref}
      className={S.persona}
      onClick={() => {
        if (ref.current.closest(".slick-center")) {
          props.action(props.name);
        }
      }}
    >
      <img src={props.img} alt="" />
    </button>
  );
};

export default Persona;
