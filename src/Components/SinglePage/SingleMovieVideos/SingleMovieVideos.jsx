import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BaseUrl, key } from "../../../Config/Config";

function SingleMovieVideos() {
  const [movieVideos, setMovieVideos] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(BaseUrl + `movie/${path}/videos` + key + `&language=en-US`)
      .then((response) => response.json())
      .then((movieVideos) => setMovieVideos(movieVideos.results.slice(0, 6)));
  }, [path]);

  return (
    <div className="Single">
      <div className="Single-items">
        {movieVideos.map((item) => {
          return (
            <div key={item.id} className="Single-item">
              <span>{item.name}</span>
              <iframe
                className="Single-frame"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleMovieVideos;
