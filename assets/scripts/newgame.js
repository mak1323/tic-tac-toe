
const newGameGenerator = function () {
  const getDiv = document.getElementById('#game-station')
  const addGameBoard = document.createTextNode(
    <div class="container game-box">
      <div class="row">
        <div class="col-xs-3">
        </div>
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-4 box" id="gameBoxTopLeft">
              <div class="game-box-top-left">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxTopMiddle">
              <div class="game-box-top-middle">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxTopRight">
              <div class="game-box-top-right">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-3">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
        </div>
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-4 box" id="gameBoxMiddleLeft">
              <div class="game-box-middle-left">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxMiddleMiddle">
              <div class="game-box-middle-middle">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxMiddleRight">
              <div class="game-box-middle-right">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-3">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3">
        </div>
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-4 box" id="gameBoxBottomLeft">
              <div class="game-box-bottom-left">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxBottomMiddle">
              <div class="game-box-bottom-middle">
              </div>
            </div>
            <div class="col-xs-4 box" id="gameBoxBottomRight">
              <div class="game-box-bottom-right">
              </div>
              <div class="col-xs-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  getDiv.appendChild(addGameBoard) //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("#game-box")
  document.body.insertBefore(getDiv, currentDiv)
}

module.exports = {
  newGameGenerator
}
