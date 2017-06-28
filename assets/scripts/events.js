'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')

const positionToValue = function (event) {
  event.preventDefault()
  console.log('working')
  const data = getFormFields(event.target)
  let claimedSpace = 0
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i]) {
      claimedSpace = gameboardRef.gameboard[i]
    }
  }
  console.log(claimedSpace)
}

module.exports = {
  positionToValue
}
