'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')

let playerOne = []

const positionToValue = function(currentBox) {
  const data = currentBox.id
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      return gameboardRef.gameboardPosition[i].id
    }
  }
}

// const checkVictory = function (arr) {
//   const playerArray = arr
//   console.log(playerArray)
//   for (let j = 0; j < playerArray.length; j++) {
//     for (let i = 0; i < gameboardRef.winningConditions.length; i++) {
//       if (playerArray[j] === gameboardRef.winningConditions[i][0]) {
//         if (playerArray[j] === gameboardRef.winningConditions[i][1]) {
//           if (playerArray[j] === gameboardRef.winningConditions[i][2]) {
//             console.log('Player Wins')
//           }
//         }
//       }
//     }
//   }
// }

const playerMove = function(event) {
    event.preventDefault()
    console.log(this)
    const currentBox = this
    const currentMove = positionToValue(currentBox)
    let checkOne = false
    let checkTwo = false
    let checkThree = false
    playerOne.push({
      'move': currentMove
    })
    console.log(playerOne)
    if (playerOne.length >= 3) {
      console.log('bacon')
      if (playerOne.find(gameboardRef.isWinZero)) {
        checkOne = true
        console.log(checkOne)
      }
      if (playerOne.find(gameboardRef.isWinOne)) {
        checkTwo = true
        console.log(checkTwo)
      }
      if (playerOne.find(gameboardRef.isWinTwo)) {
        checkThree = true
        console.log(checkThree)
      }
      console.log(checkOne, ' ', checkTwo, ' ', checkThree)
      if (checkOne === true && checkTwo === true && checkThree === true) {
        console.log('Victory')
      }
    }
  }

    module.exports = {
      playerMove
    }
