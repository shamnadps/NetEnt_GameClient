/* global fetch, document */
import 'whatwg-fetch'
const RESOURCE = {
  PREFIX: 'img/Symbol_',
  EXTN: '.png',
  DEFAULT: 'img/Symbol_0.png'
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
    this._prePlayMethods()
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
  */
  _prePlayMethods () {
    document.querySelector('#gameInfo').className = ''
    document.querySelector('#slotSelected').style.display = 'none'
    document.querySelector('#slotRotation').style.display = 'block'
    document.querySelector('#playButton').style.pointerEvents = 'none'
    document.querySelector('#bonusButton').style.pointerEvents = 'none'
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
    const imageHolder = document.querySelectorAll('.game-image')
    for (let i = 0; i < imageHolder.length; i++) {
      imageHolder[i].src = isNaN(this.serverValue[i]) ? RESOURCE.DEFAULT : `${RESOURCE.PREFIX}${this.serverValue[i]}${RESOURCE.EXTN}`
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
      document.querySelector('#gameInfo').className = 'blink-image'
    } else if (value === 'Small Win!') {
      increment = 10
    }
    let points = parseInt(document.querySelector('#points').innerHTML)
    let total = points + increment
    this._updatePointCounter(points, total, this)
  }

  /**
  * update point counter
  * @param points, total, object
  * @private
  **/
  _updatePointCounter (points, total, object) {
    setTimeout(function () {
      document.querySelector('#points').innerHTML = points
      if (points < total) {
        points++
        object._updatePointCounter(points, total, object)
      } else {
        document.querySelector('#playButton').style.pointerEvents = 'auto'
        document.querySelector('#bonusButton').style.pointerEvents = 'auto'
      }
    }, 30)
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
    game._setTitle('Spinning..')
    game.play()
  })
}

let bonusButton = document.querySelector('#bonusButton')
if (bonusButton) {
  bonusButton.addEventListener('click', () => {
    game.play()
    document.querySelector('#bonusButton').style.display = 'none'
  })
}

export default Game
