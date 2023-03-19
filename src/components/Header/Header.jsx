import React from "react";
import TestSiteLogo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import scroller from "react-scroll/modules/mixins/scroller";

const Header = () => {
  const goSignUp = () => {
    scroller.scrollTo("form-submit", {
      duration: 2500,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };
  const goUsers = () => {
    scroller.scrollTo("users_section", {
      duration: 2500,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <header>
      <img src={TestSiteLogo} alt="logo" className={styles.logo} />
      <div className={styles.button_group}>
        <button className={styles.standard_button} onClick={goUsers}>
          Users
        </button>
        <button className={styles.standard_button} onClick={goSignUp}>
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
