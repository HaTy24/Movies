import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../Config/Config";
import "./Film.css";

function Film(props) {
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <div className="film">
          <img
            className="film-img"
            src={props.poster ? `${img_300}${props.poster}` : unavailable}
            alt=""
          />
          <div className="film-title">{props.title} </div>
          <p className="film-description">{props.des}</p>
        </div>
      </Link>
    </div>
  );
}

export default Film;
