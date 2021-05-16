'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Requires the auth events.js page
const authEvents = require('./auth/events.js')

// Require the games events.js page
const gameEvents = require('./games/events.js')

$(() => {
  // Sign up form event listener
  $('#sign-up').on('submit', authEvents.onSignUp)

  // Sign in form event listener
  $('#sign-in').on('submit', authEvents.onSignIn)

  // Sign out button event listener
  $('#sign-out').on('click', authEvents.onSignOut)

  // Start new game button event listener
  $('#start-new-game').on('click', gameEvents.onCreateGame)

  // Event listener for when the board game boxes are clicked.
  // let gamePiece = 'X'
  // if ($('.box').is(':empty')) {
  //   $('.box').on('click', function () {
  //     const boxNumber = $(this).html('data-index')
  //     $(boxNumber).html(`<h2 class="gamePiece">${gamePiece}</h2>`)
  //   })
  // }
  $('#game-board').on('click', gameEvents.onUpdateGame)
})
