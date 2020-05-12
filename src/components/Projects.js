import React from "react";
import Example from "./Example";
import "../style/Projects.css";

const Projects = props => {

  return (
    <div className="projects">
      <h3 className="header">Here are some recent projects</h3>
      <div className="examples">
        {props.examples.map((example, index) => {
          return (
            <Example
              key={index}
              title={example.title}
              image={example.image}
              text={example.text}
              url={example.url}
              git={example.git}
              tech={example.tech}
            />          
          );           
        })}
      </div>
    </div>
  );
};

export default Projects;
