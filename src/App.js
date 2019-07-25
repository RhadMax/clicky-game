import React from 'react';
import './App.css';
import images from "./images.json"

let clickedImages = [];
let message;

const randomlySortImages = arr => arr.sort(() => Math.random() - 0.5);

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0
  }

  isClicked = imageId => {
    for (let i = 0; i < images.length; i++) {
      if (imageId === clickedImages[i]) { return true }
    }
    return false
  }

  componentWillMount() {
    randomlySortImages(images);
  }

  handleClick = id => {
    let alerter = document.getElementById("user-alert");
    if (this.isClicked(id)) {
      clickedImages = []
      randomlySortImages(images);
      this.setState({ score: 0 })
      message = "Awww, you lose... Let's try again!"
      alerter.setAttribute("class", "red-text")
      alerter.animate(
        [
          { transform: "translate3D(0,0,0)"},
          { transform: "translate3D(15px,3px,0)"},
          { transform: "translate3D(30px,6px,0)"},
          { transform: "translate3D(15px,9px,0)"},
          { transform: "translate3D(0,12px,0)"},
          { transform: "translate3D(-15px,15px,0)"},
          { transform: "translate3D(-30px,18px,0)"},
          { transform: "translate3D(-15px,21px,0)"},
          { transform: "translate3D(0px,24px,0)"},
          { transform: "translate3D(0px,12px,0)"},
          { transform: "translate3D(0px,0px,0)"}
        ],
        { duration: 1500, iterations: 1 }
      )
      setTimeout(() => alerter.setAttribute("class", "message-box"), 1000)
    } else {
      message = "Nice! Keep it up!"
      clickedImages.push(id);
      this.setState({ score: this.state.score + 1 })
      randomlySortImages(images);
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score + 1 })
      }
      if (alerter) {
        alerter.setAttribute("class", "green-text")
      alerter.animate(
        [
          { transform: "translate3D(0,0,0)"},
          { transform: "translate3D(2px,-7px,0)"},
          { transform: "translate3D(4px,0px,0)"},
          { transform: "translate3D(2px,-7px,0)"},
          { transform: "translate3D(0,0px,0)"},
          { transform: "translate3D(-2px,-7px,0)"},
          { transform: "translate3D(-4px,0px,0)"},
          { transform: "translate3D(-2px,-7px,0)"},
          { transform: "translate3D(0px,0px,0)"}
        ],
        { duration: 700, iterations: 1 }
      )
      setTimeout(() => alerter.setAttribute("class", "message-box"), 700)
    }
    }
  };


  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <span><a className="navbar-brand" href="/">Clicky Game</a></span>
          <span className="h3">Score: {this.state.score}</span>
          <span className="h3">Top Score: {this.state.topScore}</span>
        </nav>
        <div className="container">
          <div className="row text-center intro">
            {(this.state.topScore === 0) ?
              <h3 className="message-box">Welcome to the Clicky-Game! If you click an image more than once, you lose. See if you can score a 15!</h3>
              : <h5 id="user-alert" className="message-box">{message}</h5>
            }
            <br /><hr />
          </div>
          <div className="row">
            {images.map(image =>
              <a key={image.id} href="# " className="image-box col-md-2" onClick={() => this.handleClick(image.id)}>
                <div className="card">
                  <img alt=" " src={process.env.PUBLIC_URL + "/img/" + image.relPath} />
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
