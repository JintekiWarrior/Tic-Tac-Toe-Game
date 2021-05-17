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
  const currentBox = $(event.target)

  if (currentBox.text() === '') {
    currentBox.text(gamePiece)
    gamePiece = gamePiece === 'O' ? 'X' : 'O'
  } else {
    $('#auth-message').text('Youve already clicked here')
  }

  // $(event.target).html(`<p>${gamePiece}</p>`)

  // $(event.target).html(`<p>${gamePiece}<p>`)
  // this defines what space was clicked on the board.
  const boxNumber = $(event.target).data('index')
  // this is the gamePiece we will add to the array. Suuposed to start at X.

  // this is getting the gameId which we stored earlier
  const gameId = store.game._id
  // this is storing the data which we will use to communicate with the api.
  const data = {
    game: {
      cell: {
        index: boxNumber,
        value: currentBox.text()
      },
      over: false
    }
  }

  // this is putting that data into the storage under a new object of gameIndex.
  store.gameIndex = data

  api.updateGame(gameId, data)
    .then(ui.gameUpdateSuccess)
    .catch()
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
