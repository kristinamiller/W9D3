class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", (e) => {
      let $target = $(e.target);
      this.makeMove($target);
    } );
  }

  makeMove($square) {
    if($square.hasClass("x") || $square.hasClass("o")){
      alert("Invalid Move! try again");
    } else {
      let i = $square.data("pos");
      $square.append(this.game.currentPlayer);
      // $square.attr("id", "there");
      $square.addClass(this.game.currentPlayer);
      this.game.playMove([Math.floor(i/3), i % 3]);
    }
    if (this.game.isOver()) {
      this.endGame();
    } 
  }

  endGame() {
    let text;
    let winner = this.game.winner();
    this.$el.addClass("game-over");
    if (winner) {
      text = `${winner} wins!`;
      Array.from($(".game-over li")).forEach((li) => {
        
        if (!$(btn).hasClass("complete")) {
          btn.click();
        }
      });
    } else {
      text = `It's a draw!`;
    }
    let $h2 = $(`<h2>${text}</h2>`);
    this.$el.append($h2);
    $("ul").off("click");


  }

  setupBoard() {
    let $ttt = $(".ttt");
    $ttt.append("<ul>");
    let $ul = $(".ttt > ul");
    $ul.addClass("board");
    let $li;
    for (let i = 0; i < 9; i++) {
      $li = $("<li>");
      $li.data("pos", i);
      $ul.append($li);
    }
  }
}

module.exports = View;
