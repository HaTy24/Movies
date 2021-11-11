import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Film from "../../Components/Film/Film";
import SideBar from "../../Components/SideBar/SideBar";
import "./Movies.css";

function Movies() {
  const [page, setPage] = useState(1);
  const [numberPage, setNumberPage] = useState(1);
  const [mode, setMode] = useState(true);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=05a2f1d12401e46de40b441e5576e684&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    )
      .then((response) => response.json())
      .then((movies) => setMovies(movies.results));
  }, [page]);

  const handleMore = () => {
    setPage((pre) => pre + 1);
    setNumberPage(numberPage + 1);
    setMode(false);
    window.scroll(0, 610);
  };
  const handleLess = () => {
    setPage((pre) => pre - 1);
    setNumberPage(numberPage - 1);
    setMode(numberPage <= 2 ? true : false);
    window.scroll(0, 610);
  };
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        title="Netflix"
      />
      <div className="homeScreen">
        <div className="items">
          {movies.map((m) => {
            return (
              <Film
                key={m.id}
                poster={m.poster_path}
                title={m.title || m.name}
                id={m.id}
              />
            );
          })}
        </div>
        <SideBar />
      </div>
      <div className="bottomNav">
        <button className="BNButton" onClick={handleLess} disabled={mode}>
          Back
        </button>
        <label htmlFor="numberPage">Page</label>
        <input id="numberPage" type="text" value={numberPage} />
        <button className="BNButton" onClick={handleMore}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Movies;
