import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  BaseUrl,
  img_300,
  img_500,
  unavailable,
  key,
} from "../../../Config/Config";

function Cast() {
  const [cast, setCast] = useState([]);
  const [result, setResult] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(BaseUrl + `movie/${path}/credits` + key + `&language=en-US`)
      .then((response) => response.json())
      .then((cast) => setCast(cast.cast.slice(0, 10)));
  }, [path]);

  useEffect(() => {
    fetch(BaseUrl + `movie/${path}` + key + `&language=en-US`)
      .then((response) => response.json())
      .then((result) =>
        setResult({
          genres: result.genres,
          overview: result.overview,
          name: result.original_title,
          img: result.poster_path,
          vote_average: result.vote_average,
          release_date: result.release_date,
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
            <span>Khởi chiếu: {result.release_date}</span>
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

export default Cast;
