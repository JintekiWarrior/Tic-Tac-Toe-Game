'use strict'

const store = require('./../store.js')

// Effects what happens when the onCreateGame function runs.
const createGameSuccess = function (res) {
  // Dsiplays the game board
  $('#game-board').css('display', 'initial')
}
// send a message if the create game fails
const createGameFailure = function (err) {
  $('#auth-message').text('error with creating game ' + err.status)
}

const gameUpdateSuccess = function (res) {
  let gameState = res.game
  console.log(gameState)
}

const gameUpdateFailure = function (err) {
  $('#auth-message').text('error with starting game ' + err.status)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}
