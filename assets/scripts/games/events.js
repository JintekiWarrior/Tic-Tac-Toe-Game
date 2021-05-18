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

let gamePiece = 'X'
const onUpdateGame = function (event) {
  event.preventDefault()

  // Variable which I will use later to determine the box that is clicked.
  const currentBox = $(event.target)

  // Asks if the box clicked has text or not
  if (currentBox.text() === '') {
    // if the box doesn't have text it will add the game piece in defined above
    currentBox.html(`<p id="gamePiece">${gamePiece}</p>`)
    // if the gamePiece is equal to O it will become X. Else it will remain O.
    gamePiece = gamePiece === 'O' ? 'X' : 'O'
  } else {
    $('#auth-message').text('Youve already clicked here')
  }

  // this defines what space was clicked on the board.
  const boxNumber = $(event.target).data('index')
  // this is getting the gameId which we stored earlier
  const gameId = store.game._id
  // this will store the current boxes text in a variable to be sent as data
  const currentMove = currentBox.text()

  api.updateGame(gameId, boxNumber, currentMove)
    .then(ui.gameUpdateSuccess)
    .catch()
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
