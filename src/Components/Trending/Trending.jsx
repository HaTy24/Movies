import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { img_300 } from "../../Config/Config";
import "./Trending.scss";

function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=05a2f1d12401e46de40b441e5576e684"
    )
      .then((response) => response.json())
      .then((trending) => setTrending(trending.results));
  });
  return (
    <div className="trending">
      <h1>Movies Trending</h1>
      <div className="trending-items">
        <Carousel>
          {trending.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="trending-img"
                  src={`${img_300}${item.poster_path}`}
                  alt="First slide"
                />
                <h3>{item.title || item.name}</h3>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Trending;
