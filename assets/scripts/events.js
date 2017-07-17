'use strict'

const gameboardRef = require('./gameboard')
const winners = require('./winningconditions')
const auth = require('./auth/authevents')
const api = require('./auth/api')
const store = require('./store')

let playerOne = [] // empty array for player one's turns
let playerTwo = [] // empty array for player two's turns
let playerTurn = 0 // player toggle switch
let gameIndex = ["", "", "", "", "", "", "", "", ""] // all player moves are stored here
let gameMove = []
let gameState = {}
let currentGameBoard = gameboardRef.gameboard // sets a blank game board array
let gameOver = false
let value = "x"

// this piece sets figures out what the box is in position to the game board

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
  gameIndex = []
  gameOver = false
  gameMove = []
  gameState = {}
  currentGameBoard = gameboardRef.gameboard // sets a blank game board array
  $('.box').children().remove('p') // removes the visual aspect of the gameboard
}

const boardSet = function (event) {
  event.preventDefault()
  boardReset()
  logicReset()
  $('#game-box').show()
  auth.createGame()
  console.log(store.games)

  $('.box').on('click', playerMove).on()
}

const positionToValue = function (currentBox) {
  const data = currentBox.id
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      return gameboardRef.gameboardPosition[i].id
    }
  }
}

const valueToPosition = function (currentBox) {
  const data = currentBox.id
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      return gameboardRef.gameboardPosition[i].box
    }
  }
}

const xMove = function (currentMove, currentMoveForPatch, currentBox) {
  playerOne.push({
    'move': currentMove
  })
  gameIndex.push(currentMoveForPatch)
  gameMove.push('X')
  const x = $('<p>X</p>')
  x.appendTo($(currentBox))
  value = "x"
}

const oMove = function (currentMove, currentMoveForPatch, currentBox) {
  playerTwo.push({
    'move': currentMove
  })
  gameIndex.push(currentMoveForPatch)
  gameMove.push('O')
  const o = $('<p>O</p>')
  o.appendTo($(currentBox))
  value = "o"
}

const endResults = function (playerOne, playerTwo) {
  if (winners.checkVictory(playerOne)) {
    $('#errorReader').text('You win! New game?')
    $('.box').on('click', playerMove).off()
    gameOver = true
  } else if (winners.checkVictory(playerTwo)) {
    $('#errorReader').text('Player two wins! New game?')
    $('.box').on('click', playerMove).off()
    gameOver = true
  } else if (gameIndex.length === 9 &&
    !(winners.checkVictory(playerOne) && !winners.checkVictory(playerTwo))) {
    $('#errorReader').text('You tied?! What are you new? New game?')
    $('.box').on('click', playerMove).off()
    gameOver = true
  }
  return gameOver
}

const playerMove = function (event) {
  event.preventDefault()
  const currentBox = this

  const currentMove = positionToValue(currentBox)
  const currentMoveForPatch = valueToPosition(currentBox)
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
    xMove(currentMove, currentMoveForPatch, currentBox)
    playerTurn = 1
  } else if (playerTurn === 1) {
    oMove(currentMove, currentMoveForPatch, currentBox)
    playerTurn = 0
  }
  const data = {
    "game": {
      "cell": {
        "index": currentMoveForPatch,
        "value": value
      },
      "over": endResults(playerOne, playerTwo)
    }
  }
  console.log(data)
  auth.updateGame(data)
}

module.exports = {
  playerMove,
  gameState,
  boardSet
}
