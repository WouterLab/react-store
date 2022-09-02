import React from "react";
import groceries from "./images/groceries.jpg";

const HomeImg = () => {
  return (
    <div className="home__main_img">
      <img src={groceries} alt="groceries" />
    </div>
  );
};

export default HomeImg;
