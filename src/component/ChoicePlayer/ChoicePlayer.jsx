import * as React from "react";
import S from "./ChoicePlayer.module.scss";
import bruxx from "../../img/player/1.png";
import empty from "../../img/player/2.png";
import italy from "../../img/player/3.png";
import goose from "../../img/player/4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hitch from "../../img/player/5.png";
import Slider from "react-slick";
import arrow from "../../img/player/arrow.png";

import Persona from "./Persona";
import { useDispatch } from "react-redux";
import {
  choiceOwner,
  gameIsStarted,
  runGame,
} from "../../store/reducers/PlayerReducer";
import { useRef } from "react";
import ButtonControlGameContainer from "../ButtonControlerGame/ButtonControlGameContainer";

const img = [
  { img: bruxx, name: "bruxx" },
  { img: empty, name: "empty" },
  { img: italy, name: "italy" },
  { img: goose, name: "goose" },
  { img: hitch, name: "hitch" },
];

const ChoicePlayer = (props) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const changeOwner = (name) => {
    dispatch(runGame(true));
    dispatch(choiceOwner(name));
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: `50%`,
          right: "-100px",
        }}
      >
        <button
          className={S.arrow}
          style={{ transform: "rotate(180deg)" }}
          action={onClick}
          title={"Дальше"}
        >
          <img src={arrow} alt="" />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: `50%`,
          left: "-100px",
        }}
      >
        <button className={S.arrow} action={onClick} title={"Назад"}>
          <img src={arrow} alt="" />
        </button>
      </div>
    );
  }
  var settings = {
    arrows: true,
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={S.q}>
      <ButtonControlGameContainer onliFull={props.onliFull} />
      <div className={S.t}>
        <h1 className={S.title}>Выберите Свитер для Кролика</h1>
        <Slider {...settings}>
          {img.map((el, i) => {
            return (
              <Persona
                key={i}
                img={el.img}
                name={el.name}
                action={changeOwner}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ChoicePlayer;
