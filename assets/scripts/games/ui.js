'use strict'

const store = require('./../store.js')

// Effects what happens when the onCreateGame function runs.
const createGameSuccess = function (res) {
  // Dsiplays the game board
  $('#game-board').css('display', 'initial')
  // stores the game state along with the user
  store.game = res.game
}
// send a message if the create game fails
const createGameFailure = function (err) {
  $('#auth-message').text('error with creating game ' + err.status)
}

const gameUpdateSuccess = function (res) {
  // will store the game response in the storage object.
  store.game = res.game
  console.log(store)

  const playerMove = store.game.cells
  let gameOver = store.game.over
  // check if any of the moves made is a winning move.
  // These check if the player won horizontally

  if (playerMove[0] !== '' && playerMove[1] !== '' && playerMove[2] !== '') {
    if (playerMove[0] === playerMove[1] && playerMove[1] === playerMove[2]) {
      gameOver = true
    }
  }
  if (playerMove[3] !== '' && playerMove[4] !== '' && playerMove[5] !== '') {
    if (playerMove[3] === playerMove[4] && playerMove[4] === playerMove[5]) {
      gameOver = true
    }
  }
  if (playerMove[6] !== '' && playerMove[7] !== '' && playerMove[8] !== '') {
    if (playerMove[6] === playerMove[7] && playerMove[7] === playerMove[8]) {
      gameOver = true
    }
  }
  if (playerMove[0] !== '' && playerMove[3] !== '' && playerMove[6] !== '') {
    if (playerMove[0] === playerMove[3] && playerMove[3] === playerMove[6]) {
      gameOver = true
    }
  }
  if (playerMove[1] !== '' && playerMove[4] !== '' && playerMove[7] !== '') {
    if (playerMove[1] === playerMove[4] && playerMove[4] === playerMove[7]) {
      gameOver = true
    }
  }
  if (playerMove[2] !== '' && playerMove[5] !== '' && playerMove[8] !== '') {
    if (playerMove[2] === playerMove[5] && playerMove[5] === playerMove[8]) {
      gameOver = true
    }
  }
  if (playerMove[0] !== '' && playerMove[4] !== '' && playerMove[8] !== '') {
    if (playerMove[0] === playerMove[4] && playerMove[4] === playerMove[8]) {
      gameOver = true
    }
  }
  if (playerMove[2] !== '' && playerMove[4] !== '' && playerMove[6] !== '') {
    if (playerMove[2] === playerMove[4] && playerMove[4] === playerMove[6]) {
      gameOver = true
    }
  }

  if (gameOver === true) {
    $('.box').text('')
    $('#game-board').css('display', 'none')
    $('#play-again').html('<button>Play Again?</button>').on('click', function () {
      $('#game-board').css('display', 'initial')
      store.gameIndex.game.cell.value = 'X'
    })
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  gameUpdateSuccess
}
