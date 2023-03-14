import React from "react";
import TestSiteLogo from "../images/logo.svg";
import ButtonUsers from "./ButtonUsers";
import ButtonSignup from "./ButtonSignup";

const Header = () => {
  return (
    <header>
      <img src={TestSiteLogo} alt="logo" />
      <ButtonUsers />
      <ButtonSignup />
    </header>
  );
};

export default Header;
