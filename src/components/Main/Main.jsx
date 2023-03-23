import React from "react";
import { scroller } from "react-scroll/modules";
import styles from "./Main.module.scss";

const Main = () => {
  const goSignUp = () => {
    scroller.scrollTo("form-submit", {
      duration: 900,
      delay: 0,
      smooth: true,
    });
  };

  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_heading}>
        Test assignment for front-end developer
      </h1>
      <p className={styles.main_text}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <button className={styles.standard_button} onClick={goSignUp}>
        <span>Sign up</span>
      </button>
    </div>
  );
};

export default Main;
