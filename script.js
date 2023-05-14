const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const restart = document.querySelector('.restart');

let currentPlayer = 'X';
let moves = 0;
let gameFinished = false;

function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (squares[a].innerHTML === currentPlayer && squares[b].innerHTML === currentPlayer && squares[c].innerHTML === currentPlayer) {
            message.innerHTML = `${currentPlayer} win!`;
            gameFinished = true;
            return;
        }
    }

    if (moves === 9) {
        message.innerHTML = "Draw!";
        gameFinished = true;
        return;
    }

    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerHTML = `Player ${currentPlayer} to move`;
}

function makeMove() {
    if (gameFinished || this.innerHTML !== '') {
        return;
    }

    this.innerHTML = currentPlayer;
    moves++;
    checkForWinner();
}

function restartGame() {
    squares.forEach(square => square.innerHTML = '');
    currentPlayer = 'X';
    moves = 0;
    gameFinished = false;
    message.innerHTML = ` ${currentPlayer} start the game!`;
}

squares.forEach(square => square.addEventListener('click', makeMove));
restart.addEventListener('click', restartGame);
