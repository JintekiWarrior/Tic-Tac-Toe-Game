'use strict'

const config = require('./../config.js')
const store = require('./../store')

const createGame = function (gamePiece) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: {},
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateGame = function (id, boxNumber, currentMove) {
  store.gameMove = currentMove
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: boxNumber,
          value: store.gameMove
        },
        over: false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
