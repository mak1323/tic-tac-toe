'use strict'
const store = require('../store')

let games

let activeGame = false
let winsAccum = 0
let lossAccum = 0

const checkWin0 = function (games) {
  if (games.cells[0] + games.cells[1] + games.cells[2] === 'xxx') {
    return true
  }
}

const checkWin1 = function (games) {
  if (games.cells[3] + games.cells[4] + games.cells[5] === 'xxx') {
    return true
  }
}

const checkWin2 = function (games) {
  if (games.cells[6] + games.cells[7] + games.cells[8] === 'xxx') {
    return true
  }
}

const checkWin3 = function (games) {
  if (games.cells[0] + games.cells[3] + games.cells[6] === 'xxx') {
    return true
  }
}

const checkWin4 = function (games) {
  if (games.cells[1] + games.cells[4] + games.cells[7] === 'xxx') {
    return true
  }
}

const checkWin5 = function (games) {
  if (games.cells[2] + games.cells[5] + games.cells[8] === 'xxx') {
    return true
  }
}

const checkWin6 = function (games) {
  if (games.cells[0] + games.cells[4] + games.cells[8] === 'xxx') {
    return true
  }
}

const checkWin7 = function (games) {
  if (games.cells[2] + games.cells[4] + games.cells[6] === 'xxx') {
    return true
  }
}

const checkLosses0 = (games) => {
  if (games.cells[0] + games.cells[1] + games.cells[2] === 'ooo') {
    return true
  }
}

const checkLosses1 = (games) => {
  if (games.cells[3] + games.cells[4] + games.cells[5] === 'ooo') {
    return true
  }
}

const checkLosses2 = (games) => {
  if (games.cells[6] + games.cells[7] + games.cells[8] === 'ooo') {
    return true
  }
}

const checkLosses3 = (games) => {
  if (games.cells[0] + games.cells[3] + games.cells[6] === 'ooo') {
    return true
  }
}

const checkLosses4 = (games) => {
  if (games.cells[1] + games.cells[4] + games.cells[7] === 'ooo') {
    return true
  }
}

const checkLosses5 = (games) => {
  if (games.cells[2] + games.cells[5] + games.cells[8] === 'ooo') {
    return true
  }
}

const checkLosses6 = (games) => {
  if (games.cells[0] + games.cells[4] + games.cells[8] === 'ooo') {
    return true
  }
}

const checkLosses7 = (games) => {
  if (games.cells[2] + games.cells[4] + games.cells[6] === 'ooo') {
    return true
  }
}

const condenceLoss = function (games) {
  if (checkLosses0(games)) {
    lossAccum += 1
  } else if (checkLosses1(games)) {
    lossAccum += 1
  } else if (checkLosses2(games)) {
    lossAccum += 1
  } else if (checkLosses3(games)) {
    lossAccum += 1
  } else if (checkLosses4(games)) {
    lossAccum += 1
  } else if (checkLosses5(games)) {
    lossAccum += 1
  } else if (checkLosses6(games)) {
    lossAccum += 1
  } else if (checkLosses7(games)) {
    lossAccum += 1
  }
}

const condenceWin = function (games) {
  if (checkWin0(games)) {
    winsAccum += 1
  } else if (checkWin1(games)) {
    winsAccum += 1
  } else if (checkWin2(games)) {
    winsAccum += 1
  } else if (checkWin3(games)) {
    winsAccum += 1
  } else if (checkWin4(games)) {
    winsAccum += 1
  } else if (checkWin5(games)) {
    winsAccum += 1
  } else if (checkWin6(games)) {
    winsAccum += 1
  } else if (checkWin7(games)) {
    winsAccum += 1
  }
}
const winLoss = function (games) {
  condenceWin(games)
  condenceLoss(games)
}

const getGameStats = function (games) {
  winsAccum = 0
  lossAccum = 0
  for (let i = 0; i < games.length; i++) {
    winLoss(games[i])
  }
  const ties = games.length - (winsAccum + lossAccum)
  $('#wins-stat').text(winsAccum)
  $('#losses-stat').text(lossAccum)
  $('#ties-stat').text(ties)
}

const gameId = function () {
  console.log(activeGame.id)
  return activeGame.id
}

const gameSet = function () {
  $('#change-password').show()
  $('#signout').show()
  $('.game-stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.game-stats').show()
  $('.fun').hide()
}

const message = function (str) {
  $('#errorReader').text(str)
}

const gameEnd = function () {
  message('Done for now.')
  $('#change-password').hide()
  $('#signout').hide()
  $('.game-stats').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.fun').show()
  $('#game-box').hide()
}

const signUpSuccess = (data) => {
  message('You have made a new user. Sign in?')
}

const signInFailure = (data) => {
  message("User doesn't exist or password is incorrect. Try Again")
}

const signInSuccess = (data) => {
  message('Signed in. To start playing click new game.')
  store.user = data.user
  console.log(store.user)
  gameSet()
}

const signUpFailure = (data) => {
  message("User name isn't correct format or is taken. Try Again.")
}

const changePasswordSuccess = (data) => {
  message("You're password has changed successfully.")
}

const changePasswordFailure = function () {
  message("You're password has changed successfully.")
}

const signOutSuccess = function () {
  $('#wins-stat').text('')
  $('#losses-stat').text('')
  $('#ties-stat').text('')
  gameEnd()
}

const signOutFailure = function () {
  message('You are still logged in.')
}

const createGameSuccess = (data) => {
  message("You're ready to play.")
  store.active = data.game
  activeGame = store.active
}

const createGameFailure = (data) => {
  message("You're not ready to play.")
}

const getStatesSuccess = (data) => {
  message("You're ready to play.")
  store.games = data
  games = store.games.games
  getGameStats(games)
}

const getStatesFailure = (data) => {
  message("You're not ready to play.")
}

const successfulUpdate = (data) => {
  // message("Next Player's turn.")
}

const failedUpdate = (data) => {
  message("This game isn't saving. Sorry")
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  signInFailure,
  createGameSuccess,
  createGameFailure,
  getStatesSuccess,
  getStatesFailure,
  successfulUpdate,
  failedUpdate,
  gameId
}
