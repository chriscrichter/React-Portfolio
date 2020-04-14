import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import recyclenation from "./images/recyclenation.png";
import weatherdashboard from "./images/weatherdashboard.png";
import codequiz from "./images/codequiz.png";
import hungrymuch from "./images/hungrymuch.png";
import ramenjoy from "./images/ramenjoy.png";
import dailyplanner from "./images/dailyplanner.png";
import employeedirectory from "./images/employeedirectory.png";
import "./style/App.css";

class App extends Component {
  state = {
    examples: [
      {
        title: "hungry much?",
        image: hungrymuch,
        text:
          "Project One: hungry much?",
        url: "https://chriscrichter.github.io/ProjectOne/"
      },
      {
        title: "Recycle Nation",
        image: recyclenation,
        text:
          "Project Two: Recycle Nation",
        url: "https://intense-thicket-33780.herokuapp.com/"
      },
      {
        title: "Ramen Joy",
        image: ramenjoy,
        text:
          "Project Three: Ramen Joy",
        url: "https://stark-shelf-28495.herokuapp.com/"
      },
          ]
  };
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Nav />        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/projects"
            render={() => <Projects examples={this.state.examples} />}
          />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
