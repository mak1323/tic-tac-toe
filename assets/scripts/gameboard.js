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
}
]
const winningConditions = {
  conditionOne: [
    [0, 0],
    [0, 1],
    [0, 2]
  ],
  conditionTwo: [
    [1, 0],
    [1, 1],
    [1, 2]
  ],
  conditionThree: [
    [2, 0],
    [2, 1],
    [2, 2]
  ],
  conditionFour: [
    [0, 0],
    [1, 0],
    [2, 0]
  ],
  conditionFive: [
    [0, 1],
    [1, 1],
    [2, 1]
  ],
  conditionSix: [
    [0, 2],
    [1, 2],
    [2, 2]
  ],
  conditionSeven: [
    [0, 2],
    [1, 1],
    [2, 0]
  ],
  conditionEight: [
    [0, 0],
    [1, 1],
    [2, 2]
  ]
}

module.exports = {
  winningConditions,
  gameboardPosition
}
