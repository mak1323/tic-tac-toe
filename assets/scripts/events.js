'use strict'

const getFormFields = require('../../lib/get-form-fields')
const gameboardRef = require('./gameboard')

const positionToValue = function (event) {
  event.preventDefault()
  const data = this.id
  console.log(data)
  for (let i = 0; i < gameboardRef.gameboardPosition.length; i++) {
    if (data === gameboardRef.gameboardPosition[i].positionName) {
      console.log(gameboardRef.gameboardPosition[i].positionName)
      return gameboardRef.gameboardPosition[i].positionName
    }
  }
}

module.exports = {
  positionToValue
}
