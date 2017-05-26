'use strict';

var _mainBundle = require('../build/main.bundle.js');

var _mainBundle2 = _interopRequireDefault(_mainBundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_mainBundle2.default); /* global describe, it */

describe('Game()', function () {
  it('Constructor Called', function () {
    var game = new _mainBundle2.default.constructor();
  });
});
