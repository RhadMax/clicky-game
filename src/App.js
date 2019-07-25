import React from 'react';
import './App.css';
import images from "./images.json"

const clickedImages = [];

const isClicked = imageId => {

}

const randomlySortImages = arr => arr.sort(() => Math.random() - 0.5);

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  }

  handleClick = id => {

  };


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Clicky Game</span>
          <span className="navbar-brand mb-0 h3">Score: {this.state.score}</span>
          <span className="navbar-brand mb-0 h3">Top Score: {this.state.topScore}</span>
        </nav>
        <div className="container">
          <div className="row">
            {images.map(image =>
              <a onClick={() => this.handleClick(image.id)} className="col-sm-3">
                <div className="card">
                  <img src={process.env.PUBLIC_URL + "/img/" + image.relPath} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
