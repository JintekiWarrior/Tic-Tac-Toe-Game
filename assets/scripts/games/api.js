'use strict'

const config = require('./../config.js')
const store = require('./../store')

const createGame = function (data) {
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
          value: currentMove
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
