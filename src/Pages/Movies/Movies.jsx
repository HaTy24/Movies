import React from "react";
import Banner from "../../Components/Banner/Banner";
import ListMovies from "../../Components/ListMovies/ListMovies";
import Trending from "../../Components/Trending/Trending";

function Movies() {
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1617914309185-9e63b3badfca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        title="Cinema"
      />
      <Trending />
      <ListMovies />
    </div>
  );
}

export default Movies;
