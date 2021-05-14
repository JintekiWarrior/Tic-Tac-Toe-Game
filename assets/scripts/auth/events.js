'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Event Handler which allows the user to sign up.
const onSignUp = function (event) {
  event.preventDefault()

  // Gets the sign up data from the user.
  const data = getFormFields(event.target)

  // Function that gets the api request and sets the data in the function to be
  // used.
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// Event handler which allows the user to sign in
const onSignIn = function (event) {
  event.preventDefault()

  // Gets the sign in data from the user.
  const data = getFormFields(event.target)

  // Function that gets the api request and sets the data in the function to be used.
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// Event handler which allows the user to sign out
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
