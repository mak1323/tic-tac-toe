'use strict'
const store = require('../store')
const api = require('./api')

const signUpSuccess = (data) => {
  console.log(data)
}
const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  console.log(store)
  $('#change-password').show()
  $('#signout').show()
  $('.game-stats').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#game-box').show()
  $('.game-stats').show()
  $('.fun').hide()
}

const signUpFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('Your Password Is Changed')
}

const changePasswordFailure = function () {
  console.log('change password failed')
}

const signOutSuccess = function () {
  console.log('BYYYYyyyeee')
  $('#change-password').hide()
  $('#signout').hide()
  $('.game-stats').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.fun').show()
}

const signOutFailure = function () {
  console.log('You are still logged in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
