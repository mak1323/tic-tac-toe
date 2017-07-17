'use strict'

const store = require('./store')

// Winning conditions zero
const isWinZeroZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    return true
  }
}

const isWinZeroOne = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 1) {
    return true
  }
}

const isWinZeroTwo = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    return true
  }
}

// Winning conditions 1
const isWinOneZero = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 0) {
    return true
  }
}

const isWinOneOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    return true
  }
}

const isWinOneTwo = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 2) {
    return true
  }
}

// winning conditions 2
const isWinTwoZero = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    return true
  }
}

const isWinTwoOne = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 1) {
    return true
  }
}

const isWinTwoTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    return true
  }
}

// winning conditions 3
const isWinThreeZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    return true
  }
}

const isWinThreeOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 0) {
    return true
  }
}

const isWinThreeTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    return true
  }
}

// winning conditions 4
const isWinFourZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 1) {
    return true
  }
}

const isWinFourOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    return true
  }
}

const isWinFourTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 1) {
    return true
  }
}

// winning conditions 5
const isWinFiveZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    return true
  }
}

const isWinFiveOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 2) {
    return true
  }
}

const isWinFiveTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    return true
  }
}

// winning conditions 6
const isWinSixZero = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    return true
  }
}

const isWinSixOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    return true
  }
}

const isWinSixTwo = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    return true
  }
}

// winning conditions seven
const isWinSevenZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    return true
  }
}

const isWinSevenOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    return true
  }
}

const isWinSevenTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    return true
  }
}

// Victory check zero
const checkVictoryZero = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinZeroZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinZeroOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinZeroTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

    // Check Victory One
const checkVictoryOne = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinOneZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinOneOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinOneTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}
    // Check Victory Two
const checkVictoryTwo = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinTwoZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinTwoOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinTwoTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

    // check victory three
const checkVictoryThree = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinThreeZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinThreeOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinThreeTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

    // check victory four
const checkVictoryFour = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinFourZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinFourOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinFourTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

    // check victory five
const checkVictoryFive = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinFiveZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinFiveOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinFiveTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

    // check victory six
const checkVictorySix = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinSixZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinSixOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinSixTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}
    // check victory seven
const checkVictorySeven = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinSevenZero)) {
    checkOne = true
  }
  if (playerarr.find(isWinSevenOne)) {
    checkTwo = true
  }
  if (playerarr.find(isWinSevenTwo)) {
    checkThree = true
  }
  if (checkOne === true && checkTwo === true && checkThree === true) {
    return true
  }
}

const checkVictory = function (playerarr) {
  if (checkVictoryZero(playerarr)) {
    console.log('victorzero')
    return true
  } else if (checkVictoryOne(playerarr)) {
    console.log('victoryone')
    return true
  } else if (checkVictoryTwo(playerarr)) {
    console.log('victorytwo')
    return true
  } else if (checkVictoryThree(playerarr)) {
    console.log('victorythree')
    return true
  } else if (checkVictoryFour(playerarr)) {
    console.log('victoryfour')
    return true
  } else if (checkVictoryFive(playerarr)) {
    console.log('victoryfive')
    return true
  } else if (checkVictorySix(playerarr)) {
    console.log('victorysix')
    return true
  } else if (checkVictorySeven(playerarr)) {
    console.log('victoryseven')
    return true
  }
}

module.exports = {
  checkVictory
}
