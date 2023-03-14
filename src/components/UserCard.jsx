import React from "react";

const UserCard = ({ details }) => {
  const { photo, name, position, email, phone } = details;

  return (
    <div>
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserCard;
