import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { BaseUrl, key } from "../../Config/Config";
import TVItem from "../TVItem/TVItem";
import "./ListTVSeris.scss";

function ListTVSeris() {
  const [tvseris, setTvseris] = useState([]);

  const [page, setPage] = useState(2);

  useEffect(() => {
    fetch(BaseUrl + `tv/popular` + key + `&language=en-US&page=1`)
      .then((response) => response.json())
      .then((tvseris) => setTvseris(tvseris.results));
  }, []);

  const handleMore = () => {
    setPage((pre) => pre + 1);
    fetch(BaseUrl + `tv/popular` + key + `&language=en-US&page=${page}`)
      .then((response) => response.json())
      .then((data) => setTvseris([...tvseris, ...data.results]));
  };

  return (
    <div className="ListTVSeris">
      <h1>TV popular</h1>
      <div className="ListTVSeris-items">
        {tvseris.map((item) => {
          return (
            <TVItem
              key={item.id}
              id={item.id}
              img={item.poster_path}
              overview={item.overview}
              name={item.name}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        })}
      </div>
      <Button
        onClick={() => {
          handleMore();
        }}
        style={{ marginBottom: "30px" }}
      >
        Load More
      </Button>
    </div>
  );
}

export default ListTVSeris;
