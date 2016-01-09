'use strict';

define(['exports', 'react'], function (exports, _react) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var githubExample = 'https://github.com/Robert-W/immutable-flux-todo';
  var codepenExample = 'http://codepen.io/Robert-W/pen/pgoPbO';

  var Immutable = function Immutable() {
    return _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('a', {
      href: githubExample,
      target: '_blank'
    }, githubExample)), _react2.default.createElement('div', null, _react2.default.createElement('a', {
      href: codepenExample,
      target: '_blank'
    }, codepenExample)));
  };

  exports.default = Immutable;
});