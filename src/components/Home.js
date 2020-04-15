import React from "react";
import "../style/Home.css";
import Pic from "../images/crpic.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">Chris Richter</h1>
      <div className="mypic">
      <img src={Pic} alt='Pic' width="250" height="260" />
      </div>
      <h5 className="subheading">Columbia Engineering Coding Bootcamp</h5>
      <div className="skills">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;