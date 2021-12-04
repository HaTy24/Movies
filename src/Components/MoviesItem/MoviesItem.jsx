import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../Config/Config";
import "./MoviesItem.scss";

function Film(props) {
  return (
    <div className="Movies">
      <Link
        to={`/movie/${props.id}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div className="Movies-items">
          <img
            className="Movies-img"
            src={props.poster ? `${img_300}${props.poster}` : unavailable}
            alt=""
          />
          <div className="Movies-title">{props.title} </div>
        </div>
      </Link>
    </div>
  );
}

export default Film;
