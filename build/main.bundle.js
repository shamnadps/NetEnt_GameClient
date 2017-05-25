'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RESOURCE = {
    PREFIX: 'img/Symbol_',
    EXTN: '.png',
    DEFAULT: 'img/default.png'
};
var WIN = {
    NO: 'No win',
    SMALL: 'Small win',
    BIG: 'Big win'
};

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.serverValue = [];
        this._setImage();
    }

    /**
    * play/reload the game
    **/


    _createClass(Game, [{
        key: 'play',
        value: function play() {
            var _this = this;

            this.serverValue = [];
            this._setTitle();

            this._requestServer().then(function (serverValue) {
                _this.serverValue = serverValue[0].values;
                _this._setTitle(serverValue[2].result);
                _this._setImage();
                if (serverValue[1].bonus) {
                    _this._showBonus();
                }
            });
        }

        /**
        * set game title
        * @param value
        * @private
        **/

    }, {
        key: '_setTitle',
        value: function _setTitle() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Loading';

            var gameInfo = document.querySelector('#gameInfo');
            gameInfo.innerHTML = value;
        }

        /**
        * set image
        * @private
        **/

    }, {
        key: '_setImage',
        value: function _setImage() {
            var imageHolder = document.querySelectorAll('.game-image');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = imageHolder.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        index = _step$value[0],
                        value = _step$value[1];

                    value.src = isNaN(this.serverValue[index]) ? RESOURCE.DEFAULT : '' + RESOURCE.PREFIX + this.serverValue[index] + RESOURCE.EXTN;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        /**
        * show bonus option
        * @private
        **/

    }, {
        key: '_showBonus',
        value: function _showBonus() {
            document.querySelector('#bonusButton').style.display = 'block';
        }

        /**
        * calling server
        **/

    }, {
        key: '_requestServer',
        value: function _requestServer() {
            var localPromise = new Promise(function (resolve, reject) {
                fetch('http://localhost:1337/casino', {
                    method: 'get'
                }).then(function (d) {
                    resolve(d.json());
                });
            });
            return localPromise;
        }
    }]);

    return Game;
}();

var game = new Game();
document.querySelector('#playButton').addEventListener('click', function () {
    game.play();
});

document.querySelector('#bonusButton').addEventListener('click', function () {
    game.play();
    document.querySelector('#bonusButton').style.display = 'none';
});
