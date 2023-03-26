import { useState } from "react";
import { formSubmit } from "../../crud-operations/getUsers";
import styles from "./UserSubmit.module.scss";
import isFieldValidated, { isImageValidated } from "../../helpers/isValidated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistationSuccess from "../RegistrationSuccess/RegistationSuccess";
import { notifyError, notifySuccess } from "../../helpers/registrationReport";

const UserSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState("1");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPhotoValidated, setIsPhotoValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", checked);
    formData.append("photo", selectedFile);
    const result = await formSubmit(formData);
    result.success ? notifySuccess(<RegistationSuccess />) : notifyError(email);
    setName("");
    setEmail("");
    setPhone("");
    setChecked("1");
    setSelectedFile(null);
    setIsPhotoValidated(false);
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value.trimLeft());
        break;
      case "email":
        setEmail(value.trim());
        break;
      case "phone":
        setPhone(value.trim());
        break;
      case "position":
        setChecked(value);
        break;
      case "file":
        setIsPhotoValidated(await isImageValidated(files[0]));
        setSelectedFile(files[0]);
        break;
      default:
        return;
    }
  };

  const isChecked = (value) => {
    return value === checked;
  };

  const isAllValidated = () => {
    return isFieldValidated(name, "name") && isFieldValidated(email, "email") && isFieldValidated(phone, "phone") && isPhotoValidated && selectedFile
      ? true
      : false;
  };

  const validationStyles = (field, stringName) =>
    isFieldValidated(field, stringName) || field === "" ? styles.did_floating_input : styles.did_floating_input_error + " " + styles.input_error;

  const helperTextStyles = (field, stringName) =>
    isFieldValidated(field, stringName) || field === "" ? (
      <span className={styles.helper_text}>{stringName === "phone" ? "+38 (0XX) XXX - XX - XX" : `Please enter your ${stringName}`}</span>
    ) : (
      <span className={styles.helper_text_error}>
        {stringName === "phone" ? "Please enter a valid phone number" : `Please enter your real ${stringName}`}
      </span>
    );

  return (
    <div className={styles.submit_container} name="form-submit">
      <h2 className={styles.usersubmit_heading}>Working with POST request</h2>
      <form onSubmit={handleSubmit} className={styles.test_form}>
        <div className={styles.did_floating_label_content}>
          <input
            name="name"
            type="text"
            placeholder=" "
            value={name}
            onChange={handleChange}
            className={validationStyles(name, "name")}
            minLength={2}
            maxLength={60}
            required
          />
          <label className={styles.did_floating_label}>Your name</label>
          {helperTextStyles(name, "name")}
        </div>

        <div className={styles.did_floating_label_content}>
          <input
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={handleChange}
            className={validationStyles(email, "email")}
            required
          />
          <label className={styles.did_floating_label}>Email</label>
          {helperTextStyles(email, "email")}
        </div>
        <div className={styles.did_floating_label_content}>
          <input
            name="phone"
            type="tel"
            placeholder=" "
            value={phone}
            onChange={handleChange}
            className={validationStyles(phone, "phone")}
            required
          />
          <label className={styles.did_floating_label}>Phone</label>
          {helperTextStyles(phone, "phone")}
        </div>
        <label htmlFor="position" className={styles.position_choice}>
          <h3 className={styles.position_heading}>Select your position</h3>
          <div className={styles.position_container}>
            <input type="radio" id="front" name="position" value={1} checked={isChecked("1")} onChange={handleChange} />
            <label htmlFor="front">Lawyer</label>
          </div>
          <div className={styles.position_container}>
            <input type="radio" id="back" name="position" value={2} checked={isChecked("2")} onChange={handleChange} />
            <label htmlFor="back">Content manager</label>
          </div>
          <div className={styles.position_container}>
            <input type="radio" id="designer" name="position" value={3} checked={isChecked("3")} onChange={handleChange} />
            <label htmlFor="designer">Security</label>
          </div>
          <div className={styles.position_container}>
            <input type="radio" id="qa" name="position" value={4} checked={isChecked("4")} onChange={handleChange} />
            <label htmlFor="qa">Designer</label>
          </div>
        </label>
        <label htmlFor="file" className={styles.file_label}>
          <input type="file" name="file" onChange={handleChange} accept=".jpg" className={styles.photo_input} required />
          <div className={styles.file_input_area}>
            <div className={isPhotoValidated || !selectedFile ? styles.file_input_button : styles.file_input_button + " " + styles.input_error}>
              <span className={styles.file_input_button_span}>Upload</span>
            </div>
            <div className={isPhotoValidated || !selectedFile ? styles.file_input_name : styles.file_input_name + " " + styles.input_error}>
              <span className={styles.file_input_file_name}>{selectedFile ? selectedFile.name : "Upload your photo"}</span>
            </div>
          </div>
        </label>
        <button type="submit" className={styles.submit_button} disabled={!isAllValidated()}>
          Sign up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserSubmit;
