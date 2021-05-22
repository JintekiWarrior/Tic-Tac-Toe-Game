'use strict'

const store = require('./../store.js')
const api = require('./api.js')

// Effects what happens when the onCreateGame function runs.
const createGameSuccess = function (res) {
  // allows user to click the board because if the game is over they cannot
  $('#game-board').css('pointerEvents', 'initial')
  // Dsiplays the game board
  $('.board').show(500)
  // stores the game state along with the user
  store.game = res.game
  // hide the new game button because the play agin button will start a new game
  $('#start-new-game').hide()
}
// send a message if the create game fails
const createGameFailure = function (err) {
  $('#auth-message').text('error with creating game ' + err.status)
}

const gameUpdateSuccess = function (res) {
  // will store the game response in the storage object.
  store.game = res.game
  // getting the current move of the game
  const currentMove = store.gameValue
  const playerMove = store.game.cells

  // check if any of the moves made is a winning move.
  if (playerMove[0] !== '' && playerMove[1] !== '' && playerMove[2] !== '') {
    if (playerMove[0] === playerMove[1] && playerMove[1] === playerMove[2]) {
      store.game.over = true
    }
  }
  if (playerMove[3] !== '' && playerMove[4] !== '' && playerMove[5] !== '') {
    if (playerMove[3] === playerMove[4] && playerMove[4] === playerMove[5]) {
      store.game.over = true
    }
  }
  if (playerMove[6] !== '' && playerMove[7] !== '' && playerMove[8] !== '') {
    if (playerMove[6] === playerMove[7] && playerMove[7] === playerMove[8]) {
      store.game.over = true
    }
  }
  if (playerMove[0] !== '' && playerMove[3] !== '' && playerMove[6] !== '') {
    if (playerMove[0] === playerMove[3] && playerMove[3] === playerMove[6]) {
      store.game.over = true
    }
  }
  if (playerMove[1] !== '' && playerMove[4] !== '' && playerMove[7] !== '') {
    if (playerMove[1] === playerMove[4] && playerMove[4] === playerMove[7]) {
      store.game.over = true
    }
  }
  if (playerMove[2] !== '' && playerMove[5] !== '' && playerMove[8] !== '') {
    if (playerMove[2] === playerMove[5] && playerMove[5] === playerMove[8]) {
      store.game.over = true
    }
  }
  if (playerMove[0] !== '' && playerMove[4] !== '' && playerMove[8] !== '') {
    if (playerMove[0] === playerMove[4] && playerMove[4] === playerMove[8]) {
      store.game.over = true
    }
  }
  if (playerMove[2] !== '' && playerMove[4] !== '' && playerMove[6] !== '') {
    if (playerMove[2] === playerMove[4] && playerMove[4] === playerMove[6]) {
      store.game.over = true
    }
  }
  // Checks if there is a tie
  if (playerMove.every(item => item !== '') === true) {
    store.game.over = true
  }
  console.log(store)
  if (store.game.over === true) {
    // play again button makes an appearance
    $('#play-again').show()
    // sends text declaring the winner
    $('#player-game-piece').text(`${currentMove} is the winner`)
    $('#game-board').css('pointerEvents', 'none')
    // adds a function to play again button to clear the board and restart the game
    $('#play-again').on('click', function () {
      // empties the board of all text
      $('.box').text('')

      api.createGame()
        .then(createGameSuccess)
        .catch(createGameFailure)
    })
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  gameUpdateSuccess
}
