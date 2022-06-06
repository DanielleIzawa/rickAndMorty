import React from "react";
import Logo from "../../commom/assets/Rick-And-Morty-Logo 1.png";
import { Nav } from "./styles";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <a href="/">
        <img src={Logo} alt="" className="Image" />
      </a>
      <Burger />
    </Nav>
  );
};
export default Navbar;
