### Clicky-Game
---

### Description
A coding bootcamp assignment, our first with React. Learned the basics over the course of a couple days in class and then applied them to create a fun little memory game.

---

### Purpose
A chance to drive home the core concepts of React, making use of JSX and stateful components. This assignment also introduced us to the deployment process for a react application, in particular via github pages, but provided us with a reason to read through the readme provided by the create-react-app toolkit package and glimpse the various methods for deployment.

--- 

### Usage
The game can be found... [Here](https://rhadmax.github.io/clicky-game/)

Upon first load the images are randomly shuffled and instructions are displayed at the top of the screen. Once the user clicks any image to start play the instructions are replaced with the alert text, which either tells the user they chose correctly (an image not yet clicked), or incorrectly (something they already chose during that round) and in either case the images are shuffled again to test the memory of the user. If the user can avoid clicking an image more than once per round their score will go up wtih each successful click. The top score is also tracked for each instance of the browser remaining open, but is reset upon reloading the page by navigating away and back, reloading the page, or by clicking the name of the game in the top left which will refresh the window.

---

### Technologies
This application makes use of the following technologies:

1. Javascript
2. GitHub
3. npm Packages
    * react
    * create-react-app
    * react-dom
    * react-scripts
    * gh-pages

---

### Credits
This application was developed by me, Max Patten. I made use of skills and references taught to and provided to me by the UCSD Extension Full Stack Coding Bootcamp. The description of its intended functionality were provided to me by the Bootcamp along with reference material and boiler plate code as provided by the create-react-app package.