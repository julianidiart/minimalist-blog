import React from "react";
import loadingImage from "../../assets/images/loading.gif";

const Loading = () => (
  <div className="loading-container">
    <img src={loadingImage} alt="Loading..." />
  </div>
);

export default Loading;
