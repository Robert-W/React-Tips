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

  var Prerender = function Prerender() {
    return _react2.default.createElement('p', null, 'This is ideal for any application that is generating the UI with JavaScript. Dont load a blank page, wait for libs to load, and then render.  Use a node script to prerender your components and insert it into your html. View a prerender script here:', _react2.default.createElement('br', null), _react2.default.createElement('a', {
      href: 'https://github.com/blueraster/snippets/tree/master/scripts/react-prerender',
      target: '_blank'
    }, 'https://github.com/blueraster/snippets/tree/master/scripts/react-prerender'));
  };

  exports.default = Prerender;
});