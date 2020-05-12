import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import hungrymuch from "./images/hungrymuch.png";
import recyclenation from "./images/recyclenation.png";
import ramenjoy from "./images/ramenjoy.png";
import Footer from "./components/Footer";
import "./style/App.css";

class App extends Component {
  state = {
    examples: [
      {
        title: "hungry much?",
        image: hungrymuch,
        text:
          "Find recipes and nutritional information for the foods you are hungry for.",
        url: "https://chriscrichter.github.io/hungry-much/",
        git: "https://github.com/chriscrichter/hungry-much/",
        tech:
          "Built with Javascript, jQuery, Materialize, AJAX, various APIs"
      },
      {
        title: "Recycle Nation",
        image: recyclenation,
        text:
          "An app that tells you what to recycle and what people around the world are saying about environmental issues.",
        url: "https://intense-thicket-33780.herokuapp.com/",
        git: "https://github.com/chriscrichter/recycle-nation/",
        tech:
          "Built with Express, HandleBars, MySQL, Socket.io, NodeJS, Axios, various APIs"
      },
      {
        title: "Ramen Joy",
        image: ramenjoy,
        text:
          "A place for ramen lovers to find nearby ramen restaurants and other ramen lovers to eat it with.",
        url: "https://stark-shelf-28495.herokuapp.com/",
        git: "https://github.com/chriscrichter/ramen-joy/",
        tech:
          "Built with ReactJS, NodeJS, mongoDB, Bootstrap, various APIs"
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
