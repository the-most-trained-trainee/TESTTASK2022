import styles from "./PhotoSelect.module.scss";
// @ts-ignore
import React from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidated: boolean;
  file: File | null;
}

const PhotoSelect = React.forwardRef(({ onChange, isValidated, file }: Props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <label htmlFor="file" className={styles.file_label}>
      <input type="file" name="file" onChange={onChange} ref={ref} accept=".jpg" className={styles.photo_input} required />
      <div className={styles.file_input_area}>
        <div className={isValidated || !file ? styles.file_input_button : styles.file_input_button + " " + styles.input_error}>
          <span className={styles.file_input_button_span}>Upload</span>
        </div>
        <div className={isValidated || !file ? styles.file_input_name : styles.file_input_name + " " + styles.input_error}>
          <span className={styles.file_input_file_name}>{file ? file.name : "Upload your photo"}</span>
        </div>
      </div>
    </label>
  );
});

export default PhotoSelect;
