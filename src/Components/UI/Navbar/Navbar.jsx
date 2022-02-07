import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className={"container"}>
        <Link to="/posts" className={"navbar__link"}>
          Posts
        </Link>
        <Link to="/about" className={"navbar__link"}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
