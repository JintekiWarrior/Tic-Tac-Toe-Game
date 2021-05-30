'use strict'

// const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store.js')

const api = require('./api')
const ui = require('./ui')

// Function which shows the board and creates the data needed for the new game.
const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  // Variable which I will use later to determine the box that is clicked.
  const currentBox = $(event.target)

  // Takes the event and gets the data from the target being clicked on
  const boxNumber = currentBox.data('index')

  // this is getting the gameId which we stored earlier
  const gameId = store.game._id
  // creating a variable for what the game piece will be
  let currentMove = null
  // I want to change the current move from the ui but if a player logs in nothing
  // is in the ui. Therefore this block of code will link the current move
  // to the ui.

  if (store.gameMove === undefined) {
    currentMove = 'X'
  } else {
    currentMove = store.gameMove
  }

  if (currentBox.text() === '') {
    currentBox.html(`<p id="gamePiece">${currentMove}</p>`)
  }

  if (store.game.cells[boxNumber] === '') {
    api.updateGame(gameId, boxNumber, currentMove)
      .then(ui.gameUpdateSuccess)
      .catch()
  }
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
