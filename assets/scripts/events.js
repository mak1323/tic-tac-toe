'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')
const winners = require('./winningconditions')
const moves = require('./playermove')
const autheventer = ('./auth/authevents')
const newGameGen = ('./newgame')

let playerOne = [] // empty array for player one's turns
let playerTwo = [] // empty array for player two's turns
let playerTurn = 0 // player toggle switch
let gameRecord = [] // all player moves are stored here
let gameState = {}
let currentGameBoard = gameboardRef.gameboard // sets a blank game board array

// this piece sets figures out what the box is in position to the game board
const positionToValue = function (currentBox) {
  const data = currentBox.id
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      return gameboardRef.gameboardPosition[i].id
    }
  }
}

const boardReset = function () {
  for (let i = 0; i < currentGameBoard.length; i++) {
      if (currentGameBoard[i].state === true) {
        currentGameBoard[i].state = false
      }
    }
}

const logicReset = function () {
  playerOne = [] // empty array for player one's turns
  playerTwo = [] // empty array for player two's turns
  playerTurn = 0 // player toggle switch
  gameRecord = [] // all player moves are stored here
  gameState = {}
  currentGameBoard = gameboardRef.gameboard // sets a blank game board array
  $('.box').children().remove('p')
}

const boardSet = function (event) {
  event.preventDefault()
  boardReset()
  logicReset()
}
const xMove = function (currentMove, currentBox) {
  playerOne.push({
    'move': currentMove
  })
  gameRecord.push({
    'move-location': currentMove,
    'current-player': 'player-one'
  })
  const x = $('<p>X</p>')
  x.appendTo($(currentBox))
}

const oMove = function (currentMove, currentBox) {
  playerTwo.push({
    'move': currentMove
  })
  gameRecord.push({
    'move-location': currentMove,
    'current-player': 'player-two'
  })
  const x = $('<p>O</p>')
  x.appendTo($(currentBox))
}

const playerMove = function (event) {
  event.preventDefault()
  const currentBox = this
  const currentMove = positionToValue(currentBox)
  for (let i = 0; i < currentGameBoard.length; i++) {
    if (currentGameBoard[i].position[0] === currentMove[0] &&
       currentGameBoard[i].position[1] === currentMove[1]) {
      if (currentGameBoard[i].state === false) {
        currentGameBoard[i].state = true
      } else {
        return
      }
    }
  }
  if (playerTurn === 0) {
    xMove(currentMove, currentBox)
    playerTurn = 1
  } else if (playerTurn === 1) {
    oMove(currentMove, currentBox)
    playerTurn = 0
  }
  if (winners.checkVictory(playerOne)) {
    console.log('Player One wins')
    console.log(gameRecord)
  } else if (winners.checkVictory(playerTwo)) {
    console.log('Player Two wins')
    console.log(gameRecord)
  } else if (gameRecord.length === 9 &&
    !(winners.checkVictory(playerOne) && !winners.checkVictory(playerTwo))) {
    console.log('tie')
  }
}

module.exports = {
  playerMove,
  gameState,
  boardSet
}
