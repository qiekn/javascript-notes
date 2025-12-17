"use strict";

// ----------------------------------------------------------------------------: class
function Game(width, height) {
  this.windowWidth = width;
  this.windowHeight = height;
}

Game.prototype.start = function () {
  console.log("start");
};

Game.prototype.update = function () {
  console.log("update");
};

Game.prototype.end = function () {
  console.log("end");
};

Game.prototype.info = function () {
  console.log(`width: ${this.windowWidth}, height: ${this.windowHeight}`);
};

// ----------------------------------------------------------------------------: test
const game = new Game(800, 600);
game.start();
game.info();
game.update();
game.end();
