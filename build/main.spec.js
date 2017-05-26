'use strict';

/* global describe, it */
var Game = require('../build/main.bundle.js');
var game = new Game.Game();

describe('Plya()', function () {
  it('Play() Method', function () {
    game.play();
  });
});

describe('_setImage()', function () {
  it('Setting the images', function () {
    game._setImage();
  });
});

describe('_setTitle()', function () {
  it('Setting Title', function () {
    game._setTitle();
  });
});

describe('_showBonus()', function () {
  it('Show Bonus', function () {
    game._showBonus();
  });
});

describe('_requestServer()', function () {
  it('checking Server response', function () {
    game._requestServer();
  });
});
