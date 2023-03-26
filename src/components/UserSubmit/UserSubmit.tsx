// @ts-ignore
import { useState, useRef } from "react";
import { formSubmit } from "../../helpers/crud-operations";
import styles from "./UserSubmit.module.scss";
import isFieldValidated, { isImageValidated } from "../../helpers/isValidated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegistationSuccess from "../RegistrationSuccess/RegistationSuccess";
import { notifyError, notifySuccess } from "../../helpers/registrationReport";
import FloatingLabelInput from "../FloatingLabelInput/FloatingLabelInput";
import PositionSelect from "../PositionSelect/PositionSelect";
import PhotoSelect from "../PhotoSelect/PhotoSelect";

const UserSubmit: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState("1");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPhotoValidated, setIsPhotoValidated] = useState(false);

  const formInputRef = useRef<HTMLInputElement | null>(null);

  const makeDefault = () => {
    setName("");
    setEmail("");
    setPhone("");
    setChecked("1");
    setSelectedFile(null);
    setIsPhotoValidated(false);

    if (formInputRef !== null && formInputRef.current !== null) formInputRef.current.value = null as any;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", checked);
    formData.append("photo", selectedFile || "");
    const result = await formSubmit(formData);
    result.success ? notifySuccess(<RegistationSuccess />) : notifyError(email);
    makeDefault();
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.currentTarget;

    const file = files && files[0];

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
        console.log(file);
        setIsPhotoValidated(await isImageValidated(file));
        setSelectedFile(file);
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
    // @ts-ignore
    <div className={styles.submit_container} name="form-submit">
      <h2 className={styles.usersubmit_heading}>Working with POST request</h2>
      <form onSubmit={handleSubmit} className={styles.test_form}>
        <FloatingLabelInput name={name} value="name" handleChange={handleChange} />
        <FloatingLabelInput name={email} value="email" handleChange={handleChange} />
        <FloatingLabelInput name={phone} value="phone" handleChange={handleChange} />
        <PositionSelect onChange={handleChange} selected={checked} />
        <PhotoSelect onChange={handleChange} isValidated={isPhotoValidated} file={selectedFile} ref={formInputRef} />
        <button type="submit" className={styles.submit_button} disabled={!isAllValidated()}>
          Sign up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserSubmit;
