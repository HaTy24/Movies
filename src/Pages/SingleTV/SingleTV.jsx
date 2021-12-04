import React from "react";
import SingleTVVideos from "../../Components/SinglePage/SingleTVVideos/SingleTVVideos";
import SingleTVCast from "../../Components/SinglePage/SingleTVCast/SingleTVCast";

function SingleTV() {
  return (
    <div>
      <SingleTVCast />
      <SingleTVVideos />
    </div>
  );
}

export default SingleTV;
