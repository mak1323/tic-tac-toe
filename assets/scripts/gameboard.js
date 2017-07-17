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
  positionName: '0',
  id: [0, 0],
  box: 0
}, {
  positionName: '1',
  id: [0, 1],
  box: 1
}, {
  positionName: '2',
  id: [0, 2],
  box: 2
}, {
  positionName: '3',
  id: [1, 0],
  box: 3
}, {
  positionName: '4',
  id: [1, 1],
  box: 4
}, {
  positionName: '5',
  id: [1, 2],
  box: 5
}, {
  positionName: '6',
  id: [2, 0],
  box: 6
}, {
  positionName: '7',
  id: [2, 1],
  box: 7
}, {
  positionName: '8',
  id: [2, 2],
  box: 8
}]

module.exports = {
  gameboardPosition,
  gameboard
}
