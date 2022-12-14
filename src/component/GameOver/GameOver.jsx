import * as React from "react";
import S from "./GameOver.module.scss";
import { ReactComponent as Box } from "../../img/box.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const GameOver = (props) => {
  const [token, setToken] = useState(null);
  const [idUser, setIdUser] = useState();
  const [idCategory, setIdCategory] = useState();
  const [walletId, setWalletId] = useState();
  const org_id = "03650000-6bec-ac1f-086e-08d99fc3c262";
  const [value, setValue] = useState(+79650604025);
  const inputHandler = (e) => {
    console.log(e.target.value);
    setValue((prevState) => e.target.value);
  };

  const handlerSubmit = async () => {
    const tokenResponse = await getToken();
    console.log(tokenResponse);
    if (tokenResponse.data.status < 250) {
      const token = tokenResponse.data.token;
      const userResponse = await getUser(token);
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
      console.log(addCategoryResponse);
      if (addCategoryResponse.data === 200) {
        const addBonusResponse = await addBonus(
          token,
          userIDWalet.id,
          userID,
          20
        );
      } else {
        alert("вы уже участвовали в игре");
      }
      console.log(user);
    } else {
      alert("ошибка сервера");
    }
  };
  const getUser = (token) => {
    return axios.post(`http://localhost:2000/getuser`, {
      token: token,
      number: value,
      org_id: org_id,
    });
  };
  const getCategory = (token) => {
    return axios.post(`http://localhost:2000/getcategory`, {
      token: token,
      org_id: org_id,
    });
  };
  const addCategory = (token, idCategory, idUser) => {
    console.log(token, idCategory, idUser);
    return axios.post(`http://localhost:2000/addcategory`, {
      token: token,
      org_id: org_id,
      idCategory: idCategory,
      idUser: idUser,
    });
  };
  const addBonus = (token, walletId, idUser, sum) => {
    return axios

      .post(`http://localhost:2000/down`, {
        token: token,
        organizationId: org_id,
        walletId: walletId,
        customerId: idUser,
        sum: sum,
      })
      .then((res) => console.log(res));
  };
  const getToken = () => {
    return axios.post(`http://localhost:2000/gettoken`);
  };

  const score = useSelector((state) => state.player.score);
  return (
    <div className={`${S.body} ${props.gameOver && S.gameOver}`}>
      <div className={S.score}> {score}</div>
      <form
        className={S.form}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onInput={inputHandler}
          value={value}
          placeholder={"ваш телефон"}
          type="tel"
        />
        <button
          on
          onClick={() => {
            handlerSubmit();
          }}
        >
          {" "}
          отправить
        </button>{" "}
      </form>
      <Box />
    </div>
  );
};

export default GameOver;
