'use stric'

const store = require('./../store.js')

// What will happen after the user signs up.
// res will stand for response
const signUpSuccess = function (res) {
  // after the user signs up this will reset the input boxes.
  $('#sign-up').trigger('reset')

  // message to greet user after sign up
  // $('#auth-message').text('Hello, ' + res.user.email)
}

// explain what will happen if user had a sign up error
const signUpFailure = function (err) {
  $('#auth-message').text('Failed to sign up ' + err.status)
}

// What will happen after the user signs in.
// res will stand for response
const signInSuccess = function (res) {
  // after the user signs in this will reset the input boxes.
  $('#sign-in').trigger('reset')

  store.user = res.user
  console.log(store)

  // message to greet user after sign in
  // $('#auth-message').text('Welcome back, ' + res.user.email)
  $('#sign-out').show()
  $('#start-new-game').show()
  $('#before-sign-in').hide()
}

// explain what will happen if user had a sign up error
const signInFailure = function (err) {
  $('#auth-message').text('Failed to sign in ' + err.status)
}

// What will happen after the user has signed out.
const signOutSuccess = function () {
  // Clear out the user in the store
  store.user = null
  store.game = null
  store.gameMove = 'X'
  console.log(store.game)
  // $('#auth-message').text('Sign out successful, See ya!')
  $('#sign-out').hide()
  $('#start-new-game').hide()
  $('#before-sign-in').show()
  $('.board').hide()
  $('#player-game-piece').hide()
  $('#play-again').hide()
  $('.box').text('')
}

// explain what will happen if user sign out failed.
const signOutFailure = function (err) {
  $('#auth-message').text('Sign out failed ' + err.status)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
