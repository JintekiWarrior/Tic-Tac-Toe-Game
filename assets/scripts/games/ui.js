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
  store.game = res.game
  console.log(store)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  gameUpdateSuccess
}
