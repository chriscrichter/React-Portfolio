import React from "react";
import "../style/Example.css";

const Example = props => {
  return (
    <div className="example">
      <div className="title">
      <a href={props.url} target="_blank">
        <h3>{props.title}</h3>
         </a>
      </div>
      <div className = "info">
        <p>{props.text}</p>
      </div>
      <div className="image">
      <a href={props.url} target="_blank">
        <img src={props.image} alt="" height="200px" width="300px" />
        </a>
      </div>
      <div className="gitLink">
        <a href={props.url} target="_blank">{props.url}</a>
      </div>
    </div>
  );
};

export default Example;
