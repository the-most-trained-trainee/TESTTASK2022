// import React from "react";
import styles from "./RegistationSuccess.module.scss";
import RegistrationImage from "../../images/success-image.svg";

const RegistationSuccess = () => {
  return (
    <>
      <h2 className={styles.success_heading}>User successfully registered</h2>
      <img src={RegistrationImage} alt="" className={styles.success_image} />
    </>
  );
};

export default RegistationSuccess;
