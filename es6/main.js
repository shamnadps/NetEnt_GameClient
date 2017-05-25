const RESOURCE = {
    PREFIX: 'img/Symbol_',
    EXTN: '.png',
    DEFAULT: 'img/default.png'
};
const WIN = {
    NO: 'No win',
    SMALL: 'Small win',
    BIG: 'Big win'
};

class Game {

    constructor () {
        this.serverValue = [];
        this._setImage();
    }

    /**
    * play/reload the game
    **/
    play () {
        this.serverValue = [];
        this._setTitle();

        this._requestServer().then((serverValue) => {
            this.serverValue = serverValue[0].values;
            this._setTitle(serverValue[2].result);
            this._setImage();
            if(serverValue[1].bonus) {
              this._showBonus();
            }
        });
    }

    /**
    * set game title
    * @param value
    * @private
    **/
    _setTitle(value = 'Loading') {
        let gameInfo = document.querySelector('#gameInfo');
        gameInfo.innerHTML = value;
    }

    /**
    * set image
    * @private
    **/
    _setImage(){
        let imageHolder = document.querySelectorAll('.game-image');
        for (let [index, value] of imageHolder.entries()) {
            value.src = isNaN(this.serverValue[index]) ? RESOURCE.DEFAULT : `${RESOURCE.PREFIX}${this.serverValue[index]}${RESOURCE.EXTN}`;
        }
    }

    /**
    * show bonus option
    * @private
    **/
    _showBonus() {
        document.querySelector('#bonusButton').style.display = 'block';
    }

    /**
    * calling server
    **/
    _requestServer() {
        let localPromise = new Promise((resolve, reject) => {
          fetch('http://localhost:1337/casino',{
                method: 'get'
              }).then(function(d){
                resolve(d.json());
              });
        });
        return localPromise;
    }
}


let game = new Game();
document.querySelector('#playButton').addEventListener('click',  () => {
    game.play();
});

document.querySelector('#bonusButton').addEventListener('click', () => {
    game.play();
    document.querySelector('#bonusButton').style.display = 'none';
});
