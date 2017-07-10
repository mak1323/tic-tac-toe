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
// I need to iterate through gameboard and make sure it is blank.
  console.log(currentGameBoard)
}

// this is the player x move. The x is  conjures an svg file, but that isn't feasable on line
const xMove = function (currentMove, currentBox) {
  playerOne.push({
    'move': currentMove
  })
  gameRecord.push({
    'move-location': currentMove,
    'current-player': 'player-one'
  })
  const img = $('<img />', {
    id: 'img',
    src: '../assets/images/tic-tac-toe-x.svg',
    alt: 'X'
  })
  img.appendTo($(currentBox))
}

const oMove = function (currentMove, currentBox) {
  playerTwo.push({
    'move': currentMove
  })
  gameRecord.push({
    'move-location': currentMove,
    'current-player': 'player-two'
  })
  const img = $('<img />', {
    id: 'img',
    src: '../assets/images/tic-tac-toe-o.svg',
    alt: 'O'
  })
  img.appendTo($(currentBox))
}

const boardSet = function (event) {
  event.preventDefault()
  boardReset()
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
