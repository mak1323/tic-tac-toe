'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')
const winners = require('./winningconditions')
const moves = require('./playermove')

let playerOne = []
let playerTwo = []
let playerTurn = 0

const positionToValue = function(currentBox) {
  const data = currentBox.id
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      return gameboardRef.gameboardPosition[i].id
    }
  }
}

const playerMove = function(event) {
    event.preventDefault()
    const currentBox = this
    const currentMove = positionToValue(currentBox)
    if (playerTurn === 0) {
        playerOne.push({
          'move': currentMove
        })
      let img = $('<img />', {
        id: 'img',
        src: '../assets/images/tic-tac-toe-x.svg',
        alt: 'X'
      })
      img.appendTo($(currentBox))
      playerTurn = 1
    } else  if (playerTurn === 1) {
          playerTwo.push({
            'move': currentMove
          })
        let img = $('<img />', {
          id: 'img',
          src: '../assets/images/tic-tac-toe-o.svg',
          alt: 'O'
        })
      img.appendTo($(currentBox))
      playerTurn = 0
      }
  if (winners.checkVictory(playerOne)) {
    console.log('Player One wins')
  } else if (winners.checkVictory(playerTwo)){
    console.log('Player Two wins')
  }
}

module.exports = {
  playerMove
}
