import React from "react";
import TestSiteLogo from "../../images/logo.svg";
import ButtonUsers from "../ButtonUsers/ButtonUsers";
import styles from "./Header.module.scss";

// import ButtonSignup from "../ButtonSignup";

const Header = () => {
  return (
    <header>
      <img src={TestSiteLogo} alt="logo" className={styles.logo} />
      <div className={styles.button_group}>
        <ButtonUsers />
        <ButtonUsers />
      </div>
      {/* <ButtonSignup /> */}
    </header>
  );
};

// dssd

export default Header;
