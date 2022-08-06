const boxes = document.querySelectorAll('[data-box]');
const body = document.body;
const winnerDisplay = document.createElement('p');

body.prepend(winnerDisplay);

//If turn is true, X begins
(function Game() {
  this.board = new Gameboard();
  this.player1 = new Player('X');
  this.player2 = new Player('O');
  this.turn = true;

  this.display = function () {
    this.board.displayBoard();
  };

  (this.playGame = function () {
    boxes.forEach((box) => {
      box.addEventListener(
        'click',
        () => {
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
              if(this.board.checkWin('X')) {
                winnerDisplay.textContent = 'PLAYER X WINS!'
                this.turn = '';
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
              if(this.board.checkWin('O')) {
                winnerDisplay.textContent = 'PLAYER O WINS!'
                this.turn = '';
              }
              break;
          }
          if(this.board.checkTie() === true) {
            winnerDisplay.textContent = 'ITS A TIE!';
          }
          this.display();
        },
        { once: true }
      );
    });
  })();
})();

function Gameboard() {
  this.board = [];
  this.WINNING_BOARD = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  this.displayBoard = function () {
    for (let i = 0; i < this.board.length; i++) {
      boxes[i].textContent = this.board[i];
    }
  }

  this.checkWin = function (symbol) {
    return this.WINNING_BOARD.some(combination => {
      return combination.every(index => {
        return(this.board[index] === symbol);
      })
    })
  }

  this.checkTie = function() {
    let temp = this.board.filter(item => item);
    if(temp.length === 9) {
      if(this.checkWin('X') === false && this.checkWin('O') === false) {
        return true;
      }
    }
  }
}

function Player(symbol) {
  this.symbol = symbol;

  this.getSymbol = function () {
    return this.symbol;
  };
}
