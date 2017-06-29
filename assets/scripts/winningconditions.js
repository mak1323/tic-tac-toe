'use strict'



const winningConditions = [{
    winOne: [0, 0],
    winTwo: [0, 1],
    winThree: [0, 2]
  },
  {
    winOne: [1, 0],
    winTwo: [1, 1],
    winThree: [1, 2]
  },
  {
    winOne: [2, 0],
    winTwo: [2, 1],
    winThree: [2, 2]
  },
  {
    winOne: [0, 0],
    winTwo: [1, 0],
    winThree: [2, 0]
  },
  {
    winOne: [0, 1],
    winTwo: [1, 1],
    winThree: [2, 1]
  },
  {
    winOne: [0, 2],
    winTwo: [1, 2],
    winThree: [2, 2]
  },
  {
    winOne: [0, 2],
    winTwo: [1, 1],
    winThree: [2, 0]
  },

  {
    winOne: [0, 0],
    winTwo: [1, 1],
    winThree: [2, 2]
  }
]
// Winning conditions zero
const isWinZeroZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinZeroOne = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinZeroTwo = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

// Winning conditions 1
const isWinOneZero = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinOneOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinOneTwo = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

//winning conditions 2
const isWinTwoZero = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinTwoOne = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinTwoTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

//winning conditions 3
const isWinThreeZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinThreeOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 0) {
    console.log('slot two working')
    return true
  }
}

const isWinThreeTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    console.log('slot three working')
    return true
  }
}

//winning conditions 4
const isWinFourZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 1) {
    console.log('working')
    return true
  }
}

const isWinFourOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinFourTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 1) {
    console.log('slot three working')
    return true
  }
}

//winning conditions 5
const isWinFiveZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    console.log('working')
    return true
  }
}

const isWinFiveOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 2) {
    console.log('slot two working')
    return true
  }
}

const isWinFiveTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

// winning conditions 6
const isWinSixZero = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinSixOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinSixTwo = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

//winning conditions seven
const isWinSevenZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinSevenOne = (moves) => {
  if (moves.move[0] === 1 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinSevenTwo = (moves) => {
  if (moves.move[0] === 2 && moves.move[1] === 2) {
    console.log('slot three working')
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
    console.log(checkOne)
  }
  if (playerarr.find(isWinZeroOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinZeroTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Zero')
  }
}

// Check Victory One
const checkVictoryOne = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinOneZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinOneOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinOneTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory One')
  }
}
// Check Victory Two
const checkVictoryTwo = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinTwoZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinTwoOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinTwoTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Two')
  }
}

// check victory three
const checkVictoryThree = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinThreeZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinThreeOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinThreeTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Three')
  }
}

// check victory four
const checkVictoryFour = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinFourZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinFourOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinFourTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('VictoryFour')
  }
}

// check victory five
const checkVictoryFive = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinFiveZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinFiveOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinFiveTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Five')
  }
}

// check victory six
const checkVictorySix = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinSixZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinSixOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinSixTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Six')
  }
}

// check victory seven
const checkVictorySeven = function (playerarr) {
  let checkOne = false
  let checkTwo = false
  let checkThree = false
  if (playerarr.find(isWinSevenZero)) {
    checkOne = true
    console.log(checkOne)
  }
  if (playerarr.find(isWinSevenOne)) {
    checkTwo = true
    console.log(checkTwo)
  }
  if (playerarr.find(isWinSevenTwo)) {
    checkThree = true
    console.log(checkThree)
  }
  console.log(checkOne, ' ', checkTwo, ' ', checkThree)
  if (checkOne === true && checkTwo === true && checkThree === true) {
    console.log('Victory Seven')
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
  winningConditions,
  checkVictoryZero,
  checkVictoryOne,
  checkVictoryTwo,
  checkVictoryThree,
  checkVictoryFour,
  checkVictoryFive,
  checkVictorySix,
  checkVictorySeven,
  checkVictory
}
