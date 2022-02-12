import React from "react";
import Posts from "../../../pages/Posts";
import { Route, Routes } from "react-router-dom";
import { privateRouters, publicRouters } from "../../../router/routers";
import Login from "../../../pages/Login";
import { AuthContext } from "../../../context/context";
import { useContext } from "react";

export default function AppRouter() {
const {isAuthorized} = useContext(AuthContext);

  return (
    <div>
      {isAuthorized 
      ? <Routes>
          {privateRouters.map(({ path, Component }, key) => {
            return (
              <Route path={path} element={<Component />} key={key}></Route>
            );
          })}
          <Route path="*" element={<Posts />} />
        </Routes>
      : <Routes>
          {publicRouters.map(({ path, Component }, key) => {
            return (
              <Route path={path} element={<Component />} key={key}></Route>
            );
          })}
          <Route path="*" element={<Login/>} />
        </Routes>
      }
    </div>
  );
}
