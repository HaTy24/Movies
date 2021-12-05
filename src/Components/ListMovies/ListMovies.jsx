import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BaseUrl, key } from "../../Config/Config";
import MoviesItem from "../../Components/MoviesItem/MoviesItem";
import "./ListMovies.scss";

function ListMovies() {
  const [mode, setMode] = useState(true);
  const location = useLocation();
  let path = parseInt(location.search.slice(6, 9));
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(BaseUrl + `movie/popular` + key + `&language=en-US&page=${path}`)
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, [path]);

  const handleMore = () => {
    path = path + 1;
    setMode(false);
    window.scroll(0, 1250);
  };
  const handleLess = () => {
    path = path - 1;
    setMode(path <= 1 ? true : false);
    window.scroll(0, 1250);
  };
  return (
    <div className="listMovies">
      <h1>Movies popular</h1>
      <div className="listMovies-items">
        {movies.length < 0
          ? null
          : movies.map((m) => {
              return (
                <MoviesItem
                  key={m.id}
                  poster={m.poster_path}
                  title={m.title || m.name}
                  id={m.id}
                />
              );
            })}
      </div>
      <div className="listMovies-controls">
        <Link to={`/movies?page=${path - 1}`}>
          <button
            className="listMovies-button"
            onClick={handleLess}
            disabled={mode}
          >
            Back
          </button>
        </Link>
        <div>
          <label htmlFor="numberPage">Page</label>
          <input className="listMovies-input" type="text" value={path} />
        </div>
        <Link to={`/movies?page=${path + 1}`}>
          <button className="listMovies-button" onClick={handleMore}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ListMovies;
