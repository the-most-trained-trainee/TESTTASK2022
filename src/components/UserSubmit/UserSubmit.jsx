import React, { useState } from "react";
import { formSubmit } from "../../crud-operations/getUsers";
import styles from "./UserSubmit.module.scss";
import isFieldValidated, { isImageValidated } from "../../helpers/isValidated";

const UserSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+");
  const [checked, setChecked] = useState("1");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", checked);
    formData.append("photo", selectedFile);
    formSubmit(formData);
    setName("");
    setEmail("");
    setPhone("");
    setChecked("frontend");
    setSelectedFile(null);
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.currentTarget;
    let dimensions = {};

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
        dimensions = await isImageValidated(files[0]);
        console.log(dimensions);
        setSelectedFile(files[0]);
        break;
      default:
        return;
    }
  };

  const isChecked = (value) => {
    return value === checked;
  };

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
            className={
              isFieldValidated(name, "name") || name === ""
                ? styles.did_floating_input
                : styles.did_floating_input + " " + styles.input_error
            }
            minLength={2}
            maxLength={60}
            required
          />
          <label className={styles.did_floating_label}>Your name</label>
        </div>
        <div className={styles.did_floating_label_content}>
          <input
            name="email"
            type="email"
            placeholder=" "
            value={email}
            onChange={handleChange}
            className={
              isFieldValidated(email, "email") || email === ""
                ? styles.did_floating_input
                : styles.did_floating_input + " " + styles.input_error
            }
            required
          />
          <label className={styles.did_floating_label}>Email</label>
        </div>
        <div className={styles.did_floating_label_content}>
          <input
            name="phone"
            type="tel"
            placeholder=" "
            value={phone}
            onChange={handleChange}
            className={
              isFieldValidated(phone, "phone") || phone === ""
                ? styles.did_floating_input
                : styles.did_floating_input + " " + styles.input_error
            }
            required
          />
          <label className={styles.did_floating_label}>Phone</label>
        </div>
        <span className={styles.phone_format}>+38 (XXX) XXX - XX - XX</span>
        <label htmlFor="position" className={styles.position_choice}>
          <h3 className={styles.position_heading}>Select your position</h3>
          <div className={styles.position_container}>
            <input
              type="radio"
              id="front"
              name="position"
              value={1}
              checked={isChecked("1")}
              onChange={handleChange}
            />
            <label htmlFor="front">Frontend developer</label>
          </div>
          <div className={styles.position_container}>
            <input
              type="radio"
              id="back"
              name="position"
              value={2}
              checked={isChecked("2")}
              onChange={handleChange}
            />
            <label htmlFor="back">Backend developer</label>
          </div>
          <div className={styles.position_container}>
            <input
              type="radio"
              id="designer"
              name="position"
              value={3}
              checked={isChecked("3")}
              onChange={handleChange}
            />
            <label htmlFor="designer">Designer</label>
          </div>
          <div className={styles.position_container}>
            <input
              type="radio"
              id="qa"
              name="position"
              value={4}
              checked={isChecked("4")}
              onChange={handleChange}
            />
            <label htmlFor="qa">QA</label>
          </div>
        </label>
        <label htmlFor="file" className={styles.file_label}>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            accept=".jpg"
            className={styles.photo_input}
            required
          />
          <div className={styles.file_input_area}>
            <div className={styles.file_input_button}>
              <span className={styles.file_input_button_span}>Upload</span>
            </div>
            <div className={styles.file_input_name}>
              <span className={styles.file_input_file_name}>
                {selectedFile ? selectedFile.name : "Upload your photo"}
              </span>
            </div>
          </div>
        </label>
        <button
          type="submit"
          className={styles.submit_button}
          disabled={!isFieldValidated(phone, "phone")}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserSubmit;
