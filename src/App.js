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
      if (imageId === clickedImages[i]) {return true}
    }
    return false
  }
  
  componentWillMount() {
    // alert("Welcome to clicky-game! Try to click each image only once. Can you get them all without repeating?")
    randomlySortImages(images);
  }

  handleClick = id => {
    console.log(this.isClicked(id));
    
    if (this.isClicked(id)) {
      clickedImages = []
      randomlySortImages(images);
      this.setState({ score: 0 })
      message = "Awww, you lose... Let's try again!"
    } else {
      message = "Nice! Keep it up!"
      clickedImages.push(id);
      console.log(clickedImages)
      this.setState({ score: this.state.score + 1 })
      randomlySortImages(images);
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})
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
          <h3 className="message-box">Welcome to the Clicky-Game! If you click an image more than once, you lose. See if you can score a 16!</h3>
          : <h5 className="message-box">{message}</h5>
          }
          <br/><hr/>
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
