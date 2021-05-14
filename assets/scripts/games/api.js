'use strict'

const config = require('./../config.js')
const store = require('./../store')

const createGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateGame = function (gameId, data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'PATCH',
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
  })
}

module.exports = {
  createGame,
  updateGame
}
