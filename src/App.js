import React, { Component } from "react";
import Puppy from "./components/Puppy";
import puppies from "./puppies.json";
import "./App.css";

class App extends Component {
  state = {
    puppies,
    clickedPuppies: [],
    score: 0,
    topScore: 0,
    correct: ""
  };

  puppyClick = id => {
    if (this.state.clickedPuppies.indexOf(id) === -1) {
      this.scoreIncrement();
      this.state.clickedPuppies.push(id);
      this.setState({correct: "Correct!"})
    }
    else {
      alert("You lose!")
      this.reset();
    }
  }

  scoreIncrement = () => {
    const newScore = this.state.score + 1
    this.setState({ score: newScore });
    if (newScore > this.state.topScore) {
      this.setState({ topScore: newScore })
    }
    if (newScore === 9){
      alert("You win!")
      this.reset();
    }

    this.shuffle(puppies);
  }

  reset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });

    this.shuffle(puppies);
  }

  shuffle = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Clicky Game!</span>
          <ul className="nav">
            <li className="nav-item">
              <span>Click an Image to Begin</span>
            </li>
            <li className="nav-item">
              Score:
              {this.state.score}
              | Top Score:
              {this.state.topScore}
            </li>
          </ul>
        </nav>
        <div className="container">
          {this.state.puppies.map(puppy => (
            <Puppy
              key={puppy.name}
              id={puppy.name}
              image={puppy.image}
              puppyClick={this.puppyClick}
              scoreIncrement={this.scoreIncrement}
              reset={this.reset}
              shuffle={this.shuffle}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
