"use strict";

// ----------------------------------------------------------------------------: class
class Game {
  constructor(width, height) {
    this.windowWidth = width;
    this.windowHeight = height;
  }

  info() {
    console.log(`width: ${this.windowWidth}, height: ${this.windowHeight}`);
  }

  start() {
    console.log("start");
  }

  update() {
    console.log("update");
  }

  end() {
    console.log("end");
  }
}

// ----------------------------------------------------------------------------: test
const game = new Game(800, 600);
game.start();
game.info();
game.update();
game.end();
