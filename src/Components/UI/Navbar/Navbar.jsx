import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { useContext } from "react";

const Navbar = () => {
  const {isAuthorized, setIsAuthorized} = useContext(AuthContext);

  const logoutAndSingin = ()=>{
    if(!localStorage.getItem('auth')){
      setIsAuthorized(true);
      localStorage.setItem('auth', 'true')
    } else{
      setIsAuthorized(false)
      localStorage.removeItem('auth')
    }

  }

  return (
    <div className={"navbar"}>
      <div className={"container navbar__container"}>
        <div>
          <Link to="/posts" className={"navbar__link"}>
            Posts
          </Link>
          <Link to="/about" className={"navbar__link"}>
            About
          </Link>
        </div>
        <Link onClick={logoutAndSingin} to="/login" className={"navbar__link"}>
          {isAuthorized ? 'Log out' : 'Sing in'}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
