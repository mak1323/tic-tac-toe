'use strict'
const config = require('../config')
const store = require('../store')
const ui = require('./ui')

// this is my sign up function, working well
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + 'sign-up',
    method: 'POST',
    data
  })
}

// this is the sign in function, working a ok
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + 'sign-in',
    method: 'POST',
    data
  })
}

//  change password is working fine.
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// this is working perfectly fine
const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiOrigin + 'sign-out/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// this needs to be fixed
const getStates = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + 'games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGameState = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + 'games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + 'games/' + ui.gameId(),
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getStates,
  createGameState,
  updateGame
}
