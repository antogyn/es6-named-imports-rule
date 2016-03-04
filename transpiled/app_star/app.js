'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add3 = add3;

var _math = require('./math');

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function add3(n) {
  return math.add(n, 3);
}