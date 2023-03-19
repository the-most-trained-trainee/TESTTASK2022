import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = ({ details }) => {
  const { photo, name, position, email, phone } = details;

  const phonePlusAdd = (phone) => (phone[0] === "+" ? phone : "+" + phone);

  const numberTransform = (data) => {
    let number = data;
    if (number[0] !== "+") {
      number = "+" + number;
    }
    const result = `${number.slice(0, 3)} (${number.slice(
      3,
      6
    )}) ${number.slice(6, 9)} ${number.slice(9, 11)} ${number.slice(11, 13)}`;
    return result;
  };

  return (
    <li className={styles.card_container}>
      <img src={photo} alt={name} className={styles.user_photo} />
      <p className={styles.user_name}>{name}</p>
      <p className={styles.user_position}>{position}</p>
      <a className={styles.user_email_link} href={`mailto:${email}`}>
        <p className={styles.user_email}>{email}</p>
      </a>
      <a className={styles.user_phone} href={`tel:${phonePlusAdd(phone)}`}>
        {numberTransform(phone)}
      </a>
    </li>
  );
};

export default UserCard;
