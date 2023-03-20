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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Username should contain 2-60 characters"
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

// name: required(string - minLength: 2 - maxLength: 60)

// email: required(string - minLength: 2 - maxLength: 100 - pattern: ^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)
// User email, must be a valid email according to RFC2822

// phone: required(string - pattern: ^[\+]{0,1}380([0-9]{9})$)
// User phone number. Number should start with code of Ukraine +380

// position_id: required(integer - minimum: 1)
// User`s position id. You can get list of all positions with their IDs using the API method GET api/v1/positions

// photo: required(file)
// Minimum size of photo 70x70px. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.

export default UserSubmit;
