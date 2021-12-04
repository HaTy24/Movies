import React from "react";

import "./Banner.scss";

function Banner(props) {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <span>{props.title}</span>
        <i className="fas fa-arrow-down"></i>
      </section>
    </>
  );
}

export default Banner;
