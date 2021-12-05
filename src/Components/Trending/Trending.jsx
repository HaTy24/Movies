import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { BaseUrl, img_300, key } from "../../Config/Config";
import "./Trending.scss";

function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(BaseUrl + "trending/all/day" + key)
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
