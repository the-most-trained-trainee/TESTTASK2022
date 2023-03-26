import { useState } from "react";
import { formSubmit } from "../../crud-operations/getUsers";
import styles from "./UserSubmit.module.scss";
import isFieldValidated, { isImageValidated } from "../../helpers/isValidated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistationSuccess from "../RegistrationSuccess/RegistationSuccess";
import { notifyError, notifySuccess } from "../../helpers/registrationReport";
import FloatingLabelInput from "../FloatingLabelInput/FloatingLabelInput";
import PositionSelect from "../PositionSelect/PositionSelect";
import PhotoSelect from "../PhotoSelect/PhotoSelect";

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

  const isAllValidated = () => {
    return isFieldValidated(name, "name") && isFieldValidated(email, "email") && isFieldValidated(phone, "phone") && isPhotoValidated && selectedFile
      ? true
      : false;
  };

  return (
    <div className={styles.submit_container} name="form-submit">
      <h2 className={styles.usersubmit_heading}>Working with POST request</h2>
      <form onSubmit={handleSubmit} className={styles.test_form}>
        <FloatingLabelInput name={name} value="name" handleChange={handleChange} />
        <FloatingLabelInput name={email} value="email" handleChange={handleChange} />
        <FloatingLabelInput name={phone} value="phone" handleChange={handleChange} />
        <PositionSelect onChange={handleChange} selected={checked} />
        <PhotoSelect onChange={handleChange} isValidated={isPhotoValidated} file={selectedFile} />
        <button type="submit" className={styles.submit_button} disabled={!isAllValidated()}>
          Sign up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserSubmit;
