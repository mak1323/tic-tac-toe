'use strict'

// const gameboard = [
//   [0, 0],
//   [0, 1],
//   [0, 2],
//   [1, 0],
//   [1, 1],
//   [1, 2],
//   [2, 0],
//   [2, 1],
//   [2, 2]
// ]

const gameboardPosition = [{
  positionName: 'gameBoxTopLeft',
  id: [0, 0]
}, {
  positionName: 'gameBoxTopMiddle',
  id: [0, 1]
}, {
  positionName: 'gameBoxTopRight',
  id: [0, 2]
}, {
  positionName: 'gameBoxMiddleLeft',
  id: [1, 0]
}, {
  positionName: 'gameBoxMiddleMiddle',
  id: [1, 1]
}, {
  positionName: 'gameBoxMiddleRight',
  id: [1, 2]
}, {
  positionName: 'gameBoxBottomLeft',
  id: [2, 0]
}, {
  positionName: 'gameBoxBottomMiddle',
  id: [2, 1]
}, {
  positionName: 'gameBoxBottomRight',
  id: [2, 2]
}]
const winningConditions = [
  {
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

const isWinZero = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 0) {
    console.log('working')
    return true
  }
}

const isWinOne = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 1) {
    console.log('slot two working')
    return true
  }
}

const isWinTwo = (moves) => {
  if (moves.move[0] === 0 && moves.move[1] === 2) {
    console.log('slot three working')
    return true
  }
}

module.exports = {
  winningConditions,
  gameboardPosition,
  isWinTwo,
  isWinOne,
  isWinZero
}
