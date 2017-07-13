'use strict'
const store = require('../store')
const api = require('./api')

const gameSet = function (){
  $('#change-password').show()
  $('#signout').show()
  $('.game-stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#game-box').show()
  $('.game-stats').show()
  $('.fun').hide()
}

const gameEnd = function () {
  $('#errorReader').text('Done for now.')
  $('#change-password').hide()
  $('#signout').hide()
  $('.game-stats').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.fun').show()
  $('#game-box').hide()
}

const signUpSuccess = (data) => {
  $('#errorReader').text('You have made a new user. Sign in?')
}

const signInFailure = (data) => {
  $('#errorReader').text("User doesn't exist or password is incorrect. Try Again")
}

const signInSuccess = (data) => {
  $('#errorReader').css('background-color: $pure-white')
  $('#errorReader').text('Signed in. Start playing')
  store.user = data.user
  console.log(store.user)
  gameSet()
}

const signUpFailure = (data) => {
  $('#errorReader').text("User name isn't correct format or is taken. Try Again.")
}

const changePasswordSuccess = (data) => {
  $('#errorReader').text("You're password has changed successfully.")
}

const changePasswordFailure = function () {
  $('#errorReader').text("You're password has not changed. Try again.")
}

const signOutSuccess = function () {
  gameEnd()
}

const signOutFailure = function () {
  $('#errorReader').text('You are still logged in.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  signInFailure
}
