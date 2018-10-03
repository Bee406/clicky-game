import React, { Component } from "react";
import Card from "./components/Card";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Clicky Game!</span>
          <ul class="nav">
            <li class="nav-item">
              <span>Click an Image to Begin</span>
            </li>
            <li class="nav-item">
              Score: 
              0
               | Top Score: 
              0
            </li>
          </ul>
        </nav>
        <div class="container">
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
