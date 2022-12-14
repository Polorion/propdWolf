import * as React from "react";
import Player from "./Player";
import { connect, useSelector } from "react-redux";
import RabbitL from "../../img/player/left.png";
import rabbitR from "../../img/player/right.png";
import RabbitLRed from "../../img/player/leftRed.png";
import rabbitRRed from "../../img/player/rightRed.png";
import RabbitLBrown from "../../img/player/leftBrown.png";
import rabbitRBrown from "../../img/player/rightBrown.png";
import RabbitLBlue from "../../img/player/leftBlue.png";
import rabbitRBlue from "../../img/player/rightBlue.png";
import RabbitLYellow from "../../img/player/leftYellow.png";
import rabbitRYellow from "../../img/player/rightYellow.png";
import bruxx from "../../img/player/1.png";
import empty from "../../img/player/2.png";
import italy from "../../img/player/3.png";
import goose from "../../img/player/4.png";
import hitch from "../../img/player/5.png";
import S from "./Basket/Basket.module.scss";
import LBF from "../../img/player/basket.png";
import LB from "../../img/player/bag.png";
import LTF from "../../img/player/basket.png";
import LT from "../../img/player/bag.png";

const PlayerContainer = (props) => {
  const whoOwner = useSelector((state) => state.player.owner);
  const succses = useSelector((state) => state.player.success);
  const position = useSelector((state) => state.player.positionPlayer);

  const basketActive = () => {
    if (props.position === "1") {
      return {
        rt: false,
        rb: false,
        lt: false,
        lb: true,
      };
    }
    if (props.position === "2") {
      return {
        rt: false,
        rb: true,
        lt: false,
        lb: false,
      };
    }
    if (props.position === "3") {
      return {
        rt: false,
        rb: false,
        lt: true,
        lb: false,
      };
    }
    if (props.position === "4") {
      return {
        rt: true,
        rb: false,
        lt: false,
        lb: false,
      };
    }
  };

  const player = () => {
    switch (whoOwner) {
      case "empty":
        return {
          playerL: RabbitL,
          playerR: rabbitR,
        };
      case "bruxx":
        return {
          playerL: RabbitLYellow,
          playerR: rabbitRYellow,
        };
      case "italy":
        return {
          playerL: RabbitLRed,
          playerR: rabbitRRed,
        };
      case "goose":
        return {
          playerL: RabbitLBrown,
          playerR: rabbitRBrown,
        };
      case "hitch":
        return {
          playerL: RabbitLBlue,
          playerR: rabbitRBlue,
        };
    }
    return {};
  };
  const setActive = () => {
    if (props.position === "1") {
      return {
        r: true,
        l: false,
      };
    }
    if (props.position === "3") {
      return {
        rr: true,
        l: false,
      };
    }
    if (props.position === "4") {
      return {
        r: false,
        l: true,
      };
    }
    if (props.position === "2") {
      return {
        r: false,
        ll: true,
      };
    }
  };
  const one = {
    img: succses && position === "2" ? LBF : LB,
    top: 49,
    left: 60,
    active: basketActive().rb,
  };
  const two = {
    img: succses && position === "3" ? LTF : LT,
    top: 49,
    left: 35,
    active: basketActive().lt,
  };
  const three = {
    img: succses && position === "1" ? LTF : LT,
    top: 49,
    left: 10,
    active: basketActive().lb,
  };

  const four = {
    img: succses && position === "4" ? LTF : LT,
    top: 49,
    left: 85,
    active: basketActive().rt,
  };

  return (
    <div>
      <Player
        left={41}
        position={props.position}
        img={player().playerL}
        active={setActive().rr}
        positionBasket={"1"}
      />{" "}
      <Player
        left={16}
        position={props.position}
        img={player().playerL}
        active={setActive().r}
        positionBasket={"1"}
      />
      <Player
        left={50.5}
        position={props.position}
        img={player().playerR}
        active={setActive().ll}
        positionBasket={"2"}
      />
      <Player
        left={76}
        position={props.position}
        img={player().playerR}
        active={setActive().l}
        positionBasket={"2"}
      />
      <div>
        <div
          className={`${S.bodyBasket} ${one.active && S.active}`}
          style={{ top: `${one.top}%`, left: `${one.left}%` }}
        >
          <img style={{ transform: "rotate(30deg)" }} src={one.img} alt="" />
        </div>

        <div
          className={`${S.bodyBasket} ${two.active && S.active}`}
          style={{ top: `${two.top}%`, left: `${two.left}%` }}
        >
          <img src={two.img} alt="" />
        </div>
        <div
          className={`${S.bodyBasket} ${three.active && S.active}`}
          style={{ top: `${three.top}%`, left: `${three.left}%` }}
        >
          <img src={three.img} alt="" />
        </div>
        <div
          className={`${S.bodyBasket} ${four.active && S.active}`}
          style={{ top: `${four.top}%`, left: `${four.left}%` }}
        >
          <img src={four.img} alt="" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    position: state.player.positionPlayer,
  };
};
export default connect(mapStateToProps, {})(PlayerContainer);
