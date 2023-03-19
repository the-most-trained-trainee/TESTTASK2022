import React from "react";

import styles from "./Main.module.scss";
import ButtonUsers from "../ButtonUsers/ButtonUsers";

const Main = () => {
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
      <ButtonUsers />
      {/* <ButtonSignup /> */}
    </div>
  );
};

export default Main;
