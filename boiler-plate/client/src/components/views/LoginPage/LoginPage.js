import axios from "axios";
import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_action';


function LoginPage(props) {
  // 이페이지 안에서 데이터 변화를 줘야하기떄문에 state를 줘야한다.

  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 클릭 이벤트시page refresh 방지.

    let body = {
        email : Email,
        password : Password,
    }

    dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/')
            } else {
                alert('Erro')
            }
        })
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button>login</button>
      </form>
    </div>
  );
}

export default LoginPage;
