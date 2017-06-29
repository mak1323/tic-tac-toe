'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')
const winners = require('./winningconditions')

let playerOne = []

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
    console.log(this)
    const currentBox = this
    const currentMove = positionToValue(currentBox)

    playerOne.push({
      'move': currentMove
    })
    console.log(playerOne)
    if (playerOne.length >= 3) {
      winners.checkVictory(playerOne)
    }
  }

    module.exports = {
      playerMove
    }
