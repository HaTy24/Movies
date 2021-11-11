import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { img_300, unavailable } from "../../Config/Config";
import "./MovieCast.css";

function Cast() {
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${path}/credits?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US`
    )
      .then((response) => response.json())
      .then((cast) => setCast(cast.cast.slice(0, 10)));
  }, [path]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${path}?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US`
    )
      .then((response) => response.json())
      .then((genres) => setGenres(genres.genres));
  }, [path]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${path}?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US`
    )
      .then((response) => response.json())
      .then((name) => setName(name));
  }, [path]);
  return (
    <div className="movieCast">
      <div className="movie-detail">
        <div className="detail-name">
          <h1>{name.original_title}</h1>
          <img
            src={
              name.poster_path ? `${img_300}${name.poster_path}` : unavailable
            }
            alt=""
          />
        </div>
        <div className="detail-genres">
          {genres.map((g) => {
            return <span>{g.name}</span>;
          })}
        </div>
      </div>
      <div className="movie-cast">
        {cast.map((item) => {
          return (
            <div key={item.id} className="cast-item">
              <h4>{item.name}</h4>
              <img
                src={
                  item.profile_path
                    ? `${img_300}${item.profile_path}`
                    : unavailable
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cast;
