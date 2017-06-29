'use strict'

const gameboard = [
  {position: [0, 0],
    state: false},
  {position: [0, 1],
    state: false},
  {position: [0, 2],
    state: false},
  {position: [1, 0],
    state: false},
  {position: [1, 1],
    state: false},
  {position: [1, 2],
    state: false},
  {position: [2, 0],
    state: false},
  {position: [2, 1],
    state: false},
  {position: [2, 2],
    state: false}
]

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

module.exports = {
  gameboardPosition,
  gameboard
}
