import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = ({ details }) => {
  const { photo, name, position, email, phone } = details;

  return (
    <li className={styles.card_container}>
      <img src={photo} alt={name} className={styles.user_photo} />
      <p className={styles.user_name}>{name}</p>
      <p className={styles.user_position}>{position}</p>
      <p className={styles.user_email}>{email}</p>
      <p className={styles.user_phone}>{phone}</p>
    </li>
  );
};

export default UserCard;
