import React, { useState } from "react";

const WorkingPost = () => {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");
  const [phone, setPhone] = useState("phone");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
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
      default:
        return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="phone"
          value={phone}
          onChange={handleChange}
        />
        <label htmlFor="position">
          Select your position
          <input type="radio" id="front" name="position" />
          <label htmlFor="front">Frontend developer</label>
          <input type="radio" id="back" name="position" />
          <label htmlFor="back">Backend developer</label>
          <input type="radio" id="designer" name="position" />
          <label htmlFor="designer">Designer</label>
          <input type="radio" id="qa" name="position" />
          <label htmlFor="qa">QA</label>
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default WorkingPost;
