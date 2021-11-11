import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieCast from "../../Components/MovieCast/MovieCast";
import "./Single.css";

function Single() {
  const [singlePage, setSinglePage] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${path}/videos?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US`
    )
      .then((response) => response.json())
      .then((singlePage) => setSinglePage(singlePage.results.slice(0, 5)));
  }, [path]);
  return (
    <div className="single">
      <MovieCast />
      <div className="single-items">
        {singlePage.map((item, index) => {
          return (
            <div key={item.id} className="single-item">
              <h2>{item.name}</h2>
              <iframe
                width="560"
                height="315"
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

export default Single;
