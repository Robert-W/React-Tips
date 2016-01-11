'use strict';

define(['components/App', 'react-dom', 'react'], function (_App, _reactDom, _react) {
  var _App2 = _interopRequireDefault(_App);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
});