import React from "react";
import ButtonSignup from "./ButtonSignup";
import WorkingGet from "./WorkingGet";
import WorkingPost from "./WorkingPost";

const Main = () => {
  return (
    <div>
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <ButtonSignup />
      {/* <WorkingGet /> */}
      <WorkingPost />
    </div>
  );
};

export default Main;
