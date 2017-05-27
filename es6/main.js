/* global fetch, document */
const RESOURCE = {
  PREFIX: 'img/Symbol_',
  EXTN: '.png',
  DEFAULT: 'img/default.png'
}

class Game {
  constructor () {
    this.serverValue = []
    this._setImage()
  }

  /**
  * play/reload the game
  **/
  play () {
    this.serverValue = []

    this._requestServer().then((serverValue) => {
      this.serverValue = serverValue[0].values
      this._setImage()
      this._setTitle(serverValue[2].result)
      if (serverValue[1].bonus) {
        this._showBonus()
      }
      this._setPoints(serverValue[2].result)
      document.querySelector('#slotSelected').style.display = 'block'
      document.querySelector('#slotRotation').style.display = 'none'
    })
  }

  /**
  * set game title
  * @param value
  * @private
  **/
  _setTitle (value = 'Loading') {
    let gameInfo = document.querySelector('#gameInfo')
    gameInfo.innerHTML = value
  }

  /**
  * set image
  * @private
  **/
  _setImage () {
    let imageHolder = document.querySelectorAll('.game-image')
    for (let [index, value] of imageHolder.entries()) {
      value.src = isNaN(this.serverValue[index]) ? RESOURCE.DEFAULT : `${RESOURCE.PREFIX}${this.serverValue[index]}${RESOURCE.EXTN}`
    }
  }

  /**
  * show bonus option
  * @private
  **/
  _showBonus () {
    document.querySelector('#bonusButton').style.display = 'block'
  }

  /**
  * set points
  * @private
  **/
  _setPoints (value = 'No Win.') {
    let increment = 0
    if (value === 'Big Win!!!') {
      increment = 100
    } else if (value === 'Small Win!') {
      increment = 10
    }
    let points = document.querySelector('#points').innerHTML
    document.querySelector('#points').innerHTML = parseInt(points) + increment
  }

  /**
  * calling server
  **/
  _requestServer () {
    let localPromise = new Promise((resolve, reject) => {
      fetch('http://localhost:1337/casino', {
        method: 'get'
      }).then(function (d) {
        setTimeout(function () {
          resolve(d.json())
        }, 1000)
      }).catch(() => {
        this._setTitle('Server Down!! Restart Server!.')
      })
    })
    return localPromise
  }
}

let game = new Game()
let playButton = document.querySelector('#playButton')
if (playButton) {
  playButton.addEventListener('click', () => {
    document.querySelector('#slotSelected').style.display = 'none'
    document.querySelector('#slotRotation').style.display = 'block'
    game._setTitle('Spinning..')
    game.play()
  })
}

let bonusButton = document.querySelector('#bonusButton')
if (bonusButton) {
  bonusButton.addEventListener('click', () => {
    game.play()
    document.querySelector('#bonusButton').style.display = 'none'
    document.querySelector('#slotSelected').style.display = 'none'
    document.querySelector('#slotRotation').style.display = 'block'
  })
}

export default Game
