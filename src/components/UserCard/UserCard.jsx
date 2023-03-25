import React from "react";
import styles from "./UserCard.module.scss";
import PhotoPlaceHolder from "../../images/photo-cover.svg";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const UserCard = ({ details }) => {
  const { photo, name, position, email, phone, id } = details;

  const isPhoto =
    photo !==
    "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png";

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
    <>
      <li className={styles.card_container}>
        <img
          src={isPhoto ? photo : PhotoPlaceHolder}
          alt={name}
          className={styles.user_photo}
        />
        <p className={styles.user_name}>{name}</p>
        <p className={styles.user_position}>{position}</p>
        <a className={styles.user_email_link} href={`mailto:${email}`}>
          <p className={styles.user_email} id={id}>
            {email}
          </p>
        </a>
        <a className={styles.user_phone} href={`tel:${phonePlusAdd(phone)}`}>
          {numberTransform(phone)}
        </a>
      </li>
      <Tooltip
        anchorId={id}
        place="bottom"
        content={email}
        className={styles.tooltip_styles}
        classNameArrow={styles.example_arrow}
        offset={0}
      />
    </>
  );
};

export default UserCard;
