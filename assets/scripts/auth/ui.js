'use strict'
const store = require('../store')

let games

let activeGame = false
let winsAccum = 0
let lossAccum = 0

const checkWin0 = function (games) {
  if (games.cells[0] + games.cells[1] + games.cells[2] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin1 = function (games) {
  if (games.cells[3] + games.cells[4] + games.cells[5] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin2 = function (games) {
  if (games.cells[6] + games.cells[7] + games.cells[8] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin3 = function (games) {
  if (games.cells[0] + games.cells[3] + games.cells[6] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin4 = function (games) {
  if (games.cells[1] + games.cells[4] + games.cells[7] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin5 = function (games) {
  if (games.cells[2] + games.cells[5] + games.cells[8] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin6 = function (games) {
  if (games.cells[0] + games.cells[4] + games.cells[8] === 'xxx') {
    winsAccum += 1
  }
}

const checkWin7 = function (games) {
  if (games.cells[2] + games.cells[4] + games.cells[6] === 'xxx') {
    winsAccum += 1
  }
}

const checkLosses0 = (games) => {
  if (games.cells[0] + games.cells[1] + games.cells[2] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses1 = (games) => {
  if (games.cells[3] + games.cells[4] + games.cells[5] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses2 = (games) => {
  if (games.cells[6] + games.cells[7] + games.cells[8] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses3 = (games) => {
  if (games.cells[0] + games.cells[3] + games.cells[6] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses4 = (games) => {
  if (games.cells[1] + games.cells[4] + games.cells[7] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses5 = (games) => {
  if (games.cells[2] + games.cells[5] + games.cells[8] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses6 = (games) => {
  if (games.cells[0] + games.cells[4] + games.cells[8] === 'ooo') {
    lossAccum += 1
  }
}

const checkLosses7 = (games) => {
  if (games.cells[2] + games.cells[4] + games.cells[6] === 'ooo') {
    lossAccum += 1
  }
}

const condenceWin = function (games) {
  checkWin0(games)
  checkWin1(games)
  checkWin2(games)
  checkWin3(games)
  checkWin4(games)
  checkWin5(games)
  checkWin6(games)
  checkWin7(games)
}

const condenceLoss = function (games) {
  checkLosses0(games)
  checkLosses1(games)
  checkLosses2(games)
  checkLosses3(games)
  checkLosses4(games)
  checkLosses5(games)
  checkLosses6(games)
  checkLosses7(games)
}

const winLoss = function (games) {
  condenceWin(games)
  condenceLoss(games)
}

const getGameStats = function (games) {
  console.log(winsAccum)
  console.log(lossAccum)
  for (let i = 0; i < games.length; i++) {
    winLoss(games[i])
    console.log(winsAccum)
    console.log(lossAccum)
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
  games = store.games
  getGameStats(games)
}

const getStatesFailure = (data) => {
  message("You're not ready to play.")
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
  gameId
}
