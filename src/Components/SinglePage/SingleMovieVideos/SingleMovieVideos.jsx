import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function SingleMovieVideos() {
  const [movieVideos, setMovieVideos] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${path}/videos?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US`
    )
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
