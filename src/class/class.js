"use strict";

// https://javascript.info/class

// ----------------------------------------------------------------------------: class
class Game {
  constructor(width, height) {
    this.windowWidth = width;
    this.windowHeight = height;
  }

  // Getters & Setters
  get width() {
    return this.width;
  }
  get height() {
    return this.height;
  }
  set width(value) {
    this.width = value;
  }
  set height(value) {
    this.height = value;
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

console.log("---------------: part 2");

console.log(typeof Game); // class is just a function
console.log(Game === Game.prototype.constructor); // true
console.log(Game.prototype.info);
console.log(Object.getOwnPropertyNames(Game.prototype));

// ----------------------------------------------------------------------------: dynamic create class

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

console.log("---------------: part 3");
let User = makeClass("Hello");
new User().sayHi();
