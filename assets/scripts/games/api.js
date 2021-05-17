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

const updateGame = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// const deleteGame = function (id) {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/games/' + id,
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     }
//   })
// }

module.exports = {
  createGame,
  updateGame
}
