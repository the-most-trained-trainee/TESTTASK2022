import React from "react";
import styles from "./FloatingLabelInput.module.scss";
import isFieldValidated from "../../helpers/isValidated";

const FloatingLabelInput = ({ name, value, handleChange }) => {
  const validationStyles = (field, stringName) =>
    isFieldValidated(field, stringName) || field === "" ? styles.did_floating_input : styles.did_floating_input_error + " " + styles.input_error;

  const defineLabel = () => {
    if (value === "name") return "Your name";
    if (value === "email") return "Email";
    if (value === "phone") return "Phone";
  };

  const defineType = () => {
    if (value === "name") return "text";
    if (value === "email") return "mail";
    if (value === "phone") return "tel";
  };

  const helperTextStyles = (field, stringName) =>
    isFieldValidated(field, stringName) || field === "" ? (
      <span className={styles.helper_text}>{stringName === "phone" ? "+38 (0XX) XXX - XX - XX" : `Please enter your ${stringName}`}</span>
    ) : (
      <span className={styles.helper_text_error}>
        {stringName === "phone" ? "Please enter a valid phone number" : `Please enter your real ${stringName}`}
      </span>
    );

  return (
    <div className={styles.did_floating_label_content}>
      <input
        name={value}
        type={defineType()}
        placeholder=" "
        value={name}
        onChange={handleChange}
        className={validationStyles(name, value)}
        minLength={2}
        maxLength={60}
        required
      />
      <label className={styles.did_floating_label}>{defineLabel()}</label>
      {helperTextStyles(name, value)}
    </div>
  );
};

export default FloatingLabelInput;
