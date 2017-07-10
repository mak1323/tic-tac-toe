'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const newGameGen = ('./newgame')

$(() => {
  setAPIOrigin(location, config)
  $('#change-password').hide()
  $('#signout').hide()
  $('#game-box').hide()
  $('.game-stats').hide()
})

const authEvents = require('./auth/authevents.js')
$(() => {
  authEvents.addHandlers()
})

$(() => {
  $('.box').on('click', events.playerMove)
  $('#new-game').on('click', events.boardSet)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
