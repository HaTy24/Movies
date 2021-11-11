import React from "react";
import Banner from "../../Components/Banner/Banner";
import SideBar from "../../Components/SideBar/SideBar";

function Foods() {
  return (
    <div>
      <Banner
        image="https://images.unsplash.com/photo-1619250921784-7b2b5070e498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        title="Eat Yummy"
      />
      <div className="homeScreen">
        <div className="items"></div>
        <SideBar />
      </div>
    </div>
  );
}

export default Foods;
