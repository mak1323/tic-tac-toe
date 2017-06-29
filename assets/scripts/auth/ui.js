'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}
const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  console.log(store)
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
