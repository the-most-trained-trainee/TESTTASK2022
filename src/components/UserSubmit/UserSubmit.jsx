import React, { useState } from "react";
import { formSubmit } from "../../crud-operations/getUsers";
import styles from "./UserSubmit.module.scss";

const UserSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

  const handleChange = (e) => {
    const { name, value, files } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "position":
        setChecked(value);
        break;
      case "file":
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
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
          className={styles.usersubmit_input}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className={styles.usersubmit_input}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          className={styles.usersubmit_input}
        />
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
            accept="image/*,.png,.jpg,.gif,.webp"
            className={styles.photo_input}
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
        <button type="submit" className={styles.submit_button}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserSubmit;
