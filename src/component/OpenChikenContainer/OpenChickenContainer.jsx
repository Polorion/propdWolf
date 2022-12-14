import * as React from "react";
import S from "./OpenChicken/OpenChicken.module.scss";
import { connect, useSelector } from "react-redux";
import { ReactComponent as Mandarin } from "../../img/mandar.svg";

const OpenChickenContainer = (props) => {
  const mandarin = useSelector((state) => state.openChicken.madarin);

  return (
    <div className={S.bodyMandarin}>
      <div
        className={`${S.img} ${S.one} ${mandarin === 1 && S.active}`}
        style={{ bottom: "10%", left: "10%", position: "absolute" }}
      >
        <Mandarin />
      </div>
      )
      <div
        className={`${S.img} ${S.two} ${mandarin === 2 && S.active}`}
        style={{ bottom: "10%", left: "35%", position: "absolute" }}
      >
        <Mandarin />
      </div>
      <div
        className={`${S.img} ${S.three} ${mandarin === 3 && S.active}`}
        style={{ bottom: "10%", left: "60%", position: "absolute" }}
      >
        <Mandarin />
      </div>
      <div
        className={`${S.img} ${S.four} ${mandarin === 4 && S.active}`}
        style={{ bottom: "10%", left: "85%", position: "absolute" }}
      >
        <Mandarin />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openLeft: state.openChicken.openChickenLeft,
    openChickenPositionLeft: state.openChicken.openChickenPositionLeft,
    openChickenPositionRight: state.openChicken.openChickenPositionRight,
  };
};
export default connect(mapStateToProps, {})(OpenChickenContainer);
