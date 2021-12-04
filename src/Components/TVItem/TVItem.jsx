import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../Config/Config";
import "./TVItem.scss";

function TVItem(props) {
  return (
    <div className="TVSeris">
      <Link
        to={`/tvseri/${props.id}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div className="TVSeris-items">
          <img
            className="TVSeris-img"
            src={props.img ? `${img_300}${props.img}` : unavailable}
            alt=""
          />
          <div className="TVSeris-title">{props.name} </div>
        </div>
      </Link>
    </div>
  );
}

export default TVItem;
