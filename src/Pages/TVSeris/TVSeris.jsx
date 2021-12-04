import React from "react";
import ListTVSeris from "../../Components/ListTVSeris/ListTVSeris";
import Banner from "../../Components/Banner/Banner";

function TVSeris() {
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        title="Netflix"
      />
      <ListTVSeris />
    </div>
  );
}

export default TVSeris;
