import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { useContext } from "react";

const Navbar = () => {
  const {isAuthorized, setIsAuthorized} = useContext(AuthContext);

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
        <Link onClick={()=>{setIsAuthorized(!isAuthorized)}} to="/login" className={"navbar__link"}>
          {isAuthorized ? 'Log out' : 'Sing in'}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
