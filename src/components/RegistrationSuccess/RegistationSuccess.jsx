import React from "react";
import RegistrationImage from "../../images/success-image.svg";
import styles from "./RegistationSuccess.module.scss";

const RegistationSuccess = () => {
  return (
    <>
      <h2 className={styles.success_heading}>User successfully registered</h2>
      <img src={RegistrationImage} alt="" className={styles.success_image} />
    </>
  );
};

export default RegistationSuccess;
