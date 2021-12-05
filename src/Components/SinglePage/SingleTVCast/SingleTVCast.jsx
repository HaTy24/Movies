import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  BaseUrl,
  img_300,
  img_500,
  unavailable,
  key,
} from "../../../Config/Config";
import "../SinglePage.scss";

function SingleTVCast() {
  const [result, setResult] = useState([]);
  const [cast, setCast] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    fetch(BaseUrl + `tv/${path}/credits` + key + `&language=en-US`)
      .then((response) => response.json())
      .then((cast) => setCast(cast.cast));
  }, [path]);
  useEffect(() => {
    fetch(BaseUrl + `tv/${path}` + key + `&language=en-US`)
      .then((response) => response.json())
      .then((result) =>
        setResult({
          name: result.name,
          overview: result.overview,
          img: result.poster_path,
          status: result.status,
          vote_average: result.vote_average,
          first_air_date: result.first_air_date,
          episode_number: result.last_episode_to_air.episode_number,
        })
      );
  }, [path]);
  return (
    <div className="Single">
      <div
        className="Single-detail"
        style={{
          backgroundImage: `url("${img_500}${result.img}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="Single-overlay">
          <div className="Single-name">
            <img
              src={result.img ? `${img_500}${result.img}` : unavailable}
              alt=""
            />
          </div>
          <div className="Single-info">
            <h1>{result.name}</h1>
            <span className="Single-vote">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png"
                alt=""
              />
              {result.vote_average}
            </span>
            <span>Khởi chiếu: {result.first_air_date}</span>
            <span>Số tập: {result.episode_number} tập</span>
            <span className="Single-overview">{result.overview}</span>
          </div>
        </div>
      </div>
      <div className="Single-cast">
        {cast.map((item) => {
          return (
            <div key={item.id} className="Single-item">
              <img
                src={
                  item.profile_path
                    ? `${img_300}${item.profile_path}`
                    : unavailable
                }
                alt=""
              />
              <span>{item.name}</span>
              <span>{item.character}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleTVCast;
