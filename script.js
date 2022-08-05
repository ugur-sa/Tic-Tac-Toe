const boxes = document.querySelectorAll('[data-box]');

//If turn is true, X begins
function Game(player1, player2, turn) {
  this.board = new Gameboard();
  this.player1 = new Player(player1);
  this.player2 = new Player(player2);
  this.turn = turn;

  this.display = function () {
    this.board.displayBoard();
  };

  this.playGame = function () {
    boxes.forEach((box) => {
      box.addEventListener('click', () => {
        const boxNumber = Number(box.getAttribute('class'));
        switch (this.turn) {
          case true:
            switch (boxNumber) {
              case 1:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 2:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 3:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 4:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 5:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 6:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 7:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 8:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
              case 9:
                this.board.board[boxNumber - 1] = this.player1.getSymbol();
                this.turn = false;
                break;
            }
            break;
          case false:
            switch (boxNumber) {
              case 1:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 2:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 3:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 4:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 5:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 6:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 7:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 8:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
              case 9:
                this.board.board[boxNumber - 1] = this.player2.getSymbol();
                this.turn = true;
                break;
            }
            break;
        }
        this.display();
        console.log(this.board.board);
      });
    });
  };
}

function Gameboard() {
  this.board = [];

  this.displayBoard = function () {
    const boxes = document.querySelectorAll('[data-box]');
    for (let i = 0; i < this.board.length; i++) {
      boxes[i].textContent = this.board[i];
    }
  };
}

function Player(symbol) {
  this.symbol = symbol;

  this.getSymbol = function () {
    return this.symbol;
  };
}

const game = new Game('X', 'O', true);
game.display();
game.playGame();
