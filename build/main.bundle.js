(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Game"] = factory();
	else
		root["Game"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* global fetch, document */
const RESOURCE = {
  PREFIX: 'img/Symbol_',
  EXTN: '.png',
  DEFAULT: 'img/default.png'
};

class Game {
  constructor() {
    this.serverValue = [];
    this._setImage();
  }

  /**
  * play/reload the game
  **/
  play() {
    this.serverValue = [];

    this._requestServer().then(serverValue => {
      this.serverValue = serverValue[0].values;
      this._setImage();
      this._setTitle(serverValue[2].result);
      if (serverValue[1].bonus) {
        this._showBonus();
      }
      this._setPoints(serverValue[2].result);
      document.querySelector('#slotSelected').style.display = 'block';
      document.querySelector('#slotRotation').style.display = 'none';
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
  _setImage() {
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
  * set points
  * @private
  **/
  _setPoints(value = 'No Win.') {
    let increment = 0;
    if (value === 'Big Win!!!') {
      increment = 100;
    } else if (value === 'Small Win!') {
      increment = 10;
    }
    let points = document.querySelector('#points').innerHTML;
    document.querySelector('#points').innerHTML = parseInt(points) + increment;
  }

  /**
  * calling server
  **/
  _requestServer() {
    let localPromise = new Promise((resolve, reject) => {
      fetch('http://localhost:1337/casino', {
        method: 'get'
      }).then(function (d) {
        setTimeout(function () {
          resolve(d.json());
        }, 1000);
      }).catch(() => {
        this._setTitle('Server Down!! Restart Server!.');
      });
    });
    return localPromise;
  }
}

let game = new Game();
let playButton = document.querySelector('#playButton');
if (playButton) {
  playButton.addEventListener('click', () => {
    document.querySelector('#slotSelected').style.display = 'none';
    document.querySelector('#slotRotation').style.display = 'block';
    game._setTitle('Spinning..');
    game.play();
  });
}

let bonusButton = document.querySelector('#bonusButton');
if (bonusButton) {
  bonusButton.addEventListener('click', () => {
    game.play();
    document.querySelector('#bonusButton').style.display = 'none';
    document.querySelector('#slotSelected').style.display = 'none';
    document.querySelector('#slotRotation').style.display = 'block';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })
/******/ ]);
});