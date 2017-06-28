'use strict'

const gameboard = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2]
]

const gameboardPosition = [
  '#gameBoxTopLeft',
  '#gameBoxTopMiddle',
  '#gameBoxTopRight',
  '#gameBoxMiddleLeft',
  '#gameBoxMiddleMiddle',
  '#gameBoxMiddleRight',
  '#gameBoxBottomLeft',
  '#gameBoxBottomMiddle',
  '#gameBoxBottomRight'
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
  gameboard,
  winningConditions,
  gameboardPosition
}
