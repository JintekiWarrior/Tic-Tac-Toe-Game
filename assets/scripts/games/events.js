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

  // $(event.target).html(`<p>${gamePiece}<p>`)

  // const gameData = store.game

  // const pieceSwap = function (piece) {
  //   if (piece === 'X') {
  //     piece = 'O'
  //   } else {
  //     piece = 'X'
  //   }
  // }

  const boxNumber = $(event.target).data('index')
  const gamePiece = 'X'
  const gameId = store.game._id

  const data = {
    game: {
      cell: {
        index: boxNumber,
        value: gamePiece
      },
      over: false
    }
  }

  store.games = data

  api.updateGame(gameId, data)
    .then(ui.gameUpdateSuccess)
    .catch()
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
