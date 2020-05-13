import React from "react";
import "../style/Example.css";

const Example = props => {
  return (
    <div className="example">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className = "info">
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.image} alt="" height="200px" width="300px" />
      </div>
      <div className="gitLink">
        <a href={props.url} target="_blank">Website</a> | <a href={props.git} target="_blank">GitHub</a>
      </div>
       {/*
       <div className="gitLink">
        <a href={props.git} target="_blank">{props.git}</a>
      </div>
      */}
      <div className="tech">
        <p>{props.tech}</p>
      </div>
    </div>
  );
};

export default Example;
