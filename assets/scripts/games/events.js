'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')

const api = require('./api')
const ui = require('./ui')

// Function which shows the board and creates the data needed for the new game.
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Function to update the game board and store the data.

const onUpdateGame = function (event) {
  event.preventDefault()

  api.updateGame()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}


module.exports = {
  onCreateGame,
  onUpdateGame
}
