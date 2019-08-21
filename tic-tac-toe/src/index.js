const View = require("./ttt-view.js") // require appropriate file
const Game = require("../solution/game.js") // require appropriate file



$(() => {
  let $body = $("body");
  let game = new Game();
  let view = new View(game, $body);
});
