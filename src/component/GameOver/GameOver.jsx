import * as React from "react";
import S from "./GameOver.module.scss";
import { ReactComponent as Box } from "../../img/gameover/boxes.svg";
import { ReactComponent as BoxOpen } from "../../img/gameover/openBox.svg";
import bad from "../../img/gameover/badRabit.jpg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState, CSSProperties, useEffect } from "react";
import DotLoader from "react-spinners/SyncLoader";
import {
  choiceOwner,
  gameOver,
  resetAllScore,
  resetTimeGame,
  runGame,
  setClearBag,
} from "../../store/reducers/PlayerReducer";
import { resetAllChicken } from "../../store/reducers/ChickenReducer";
import {
  refreshOpenMandarin,
  restartAllEggs,
} from "../../store/reducers/OpenChickeReducer";

const GameOver = (props) => {
  const [choise, setChoise] = useState(false);
  useEffect(() => {
    setChoise(true);
    SETERROR("");
  }, []);
  const override: CSSProperties = {
    display: "block",
    margin: "  auto",
    borderColor: "orange",
  };

  const [load, setLoad] = useState(false);
  const [badR, setbad] = useState(false);
  const [ERROR, SETERROR] = useState("");
  const scorePlayer = useSelector((state) => state.player.score);

  const org_id = "03650000-6bec-ac1f-086e-08d99fc3c262";
  const [value, setValue] = useState("+7");
  const inputHandler = (e) => {
    setValue((prevState) => e.target.value);
  };

  const handlerSubmit = async () => {
    setLoad(true);
    SETERROR("передаю ваши данные");

    let tokenResponse;
    try {
      tokenResponse = await getToken();
    } catch (err) {
      setLoad(false);
      SETERROR("проблемы на сервере");
    }
    if (tokenResponse.data.status < 250) {
      const token = tokenResponse.data.token;

      let userResponse;

      try {
        userResponse = await getUser(token);
      } catch (err) {
        setLoad(false);
        SETERROR(
          " не смог получить юзера возможно вас нет в базе или проверьте правильность номера"
        );
        setbad(true);
      }
      const user = userResponse.data;
      const userID = userResponse.data.id;
      const userIDWalet = userResponse.data.walletBalances.find(
        (el) =>
          el.wallet.name ===
          "Бонусы Italy - Общая программа по накоплению и списанию бонусов"
      );

      const categoryResponse = await getCategory(token);
      const idCategory = categoryResponse.data.find(
        (el) => el.name === "WOLF_GAME_COMPLEATED"
      );

      const addCategoryResponse = await addCategory(
        token,
        idCategory.id,
        userID
      );

      if (addCategoryResponse.data === 200) {
        const addBonusResponse = await addBonus(
          token,
          userIDWalet.id,
          userID,
          scorePlayer
        );
        SETERROR("Бонусы были начислины вам на счет ");
      } else {
        SETERROR("вы уже участвовали в игре");
      }
    } else {
      SETERROR("ошибка сервера");
    }

    setLoad(false);
  };
  const getUser = (token) => {
    return axios.post(`http://95.143.179.211:2000/getuser`, {
      token: token,
      number: value,
      org_id: org_id,
    });
  };
  const getCategory = (token) => {
    return axios.post(`http://95.143.179.211:2000/getcategory`, {
      token: token,
      org_id: org_id,
    });
  };
  const addCategory = (token, idCategory, idUser) => {
    return axios.post(`http://95.143.179.211:2000/addcategory`, {
      token: token,
      org_id: org_id,
      idCategory: idCategory,
      idUser: idUser,
    });
  };
  const addBonus = (token, walletId, idUser, sum) => {
    return axios

      .post(`http://95.143.179.211:2000/down`, {
        token: token,
        organizationId: org_id,
        walletId: walletId,
        customerId: idUser,
        sum: sum,
      })
      .then((res) => console.log(res));
  };
  const getToken = () => {
    return axios.post(`http://95.143.179.211:2000/gettoken`);
  };
  const dispatch = useDispatch();
  const score = useSelector((state) => state.player.score);

  function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }
  const words = ["Балл", "Балла", "Баллов"];

  return (
    <div className={`${S.body} ${props.gameOver && S.gameOver}`}>
      {choise ? (
        <div className={`${S.choise} `}>
          <div className={S.box}>
            {choise ? (
              <Box />
            ) : (
              <div className={S.tops}>
                <BoxOpen />
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(resetAllScore());
              dispatch(resetAllChicken());
              dispatch(restartAllEggs());
              dispatch(gameOver(false));
              dispatch(refreshOpenMandarin());
              dispatch(choiceOwner(null));
              dispatch(runGame(false));
              dispatch(resetTimeGame());
              dispatch(setClearBag());
            }}
          >
            ИГРАТЬ СНОВА
          </button>{" "}
          <button
            onClick={() => {
              setChoise(false);
            }}
          >
            ЗАБРАТЬ ПОДАРОК
          </button>
        </div>
      ) : (
        <div className={`${S.text} `}>
          <div className={S.info}>
            <h1>УРА ВЫ НАБРАЛИ</h1>
            <h2>{score}</h2>
            <h3>{num_word(score, words)}</h3>
          </div>
          {ERROR && <div className={S.error}>{ERROR}</div>}
          {ERROR && <div className={S.squere}></div>}
          <div className={S.card}>
            <p>Ведите ваш телефон</p>
          </div>
          <form>
            <input value={value} onInput={inputHandler} type="tel" />
            {value && (
              <button
                className={S.send}
                onClick={(e) => {
                  e.preventDefault();
                  handlerSubmit();
                }}
              >
                ОТПРАВИТЬ
              </button>
            )}
          </form>
          {badR && (
            <div className={S.bad}>
              <img src={bad} alt="" />
            </div>
          )}
          <div className={S.loader}>
            <DotLoader
              color={"black"}
              loading={load}
              cssOverride={override}
              size={5}
              aria-label="barLoader"
              data-testid="loader"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;
