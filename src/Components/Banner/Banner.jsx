import React from "react";

import "./Banner.css";

function Banner(props) {
  return (
    <div className="b">
      <section
        className="banner"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <h3 className="banner-title">
          Hello! Wellcome to <br />
          <span>{props.title}</span>
        </h3>
        <p className="description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <i className="fas fa-arrow-down"></i>
      </section>
    </div>
  );
}

export default Banner;
