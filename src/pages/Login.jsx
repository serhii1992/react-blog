import React from "react";
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI//button/MyButton";
import { AuthContext } from "../context/context";
import { useContext } from "react";

const Login = () => {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuthorized(!isAuthorized)
  };

  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type={"text"} placeholder={"Login"} />
        <MyInput type={"Password"} placeholder={"Password"} />
        <MyButton>Отправить</MyButton>
      </form>
    </div>
  );
};

export default Login;
