'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _math = require('./math');

var math = _interopRequireWildcard(_math);

var _app = require('./app');

var app = _interopRequireWildcard(_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('app', function () {

  it('should not mock add', function () {
    (0, _chai.expect)(app.add3(5)).to.equal(8);
  });

  it('should mock add', function () {
    _sinon2.default.stub(math, 'add').returns(5); // it works !!
    (0, _chai.expect)(app.add3(0)).to.equal(5);
  });
});