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

  var Order = function Order() {
    return _react2.default.createElement('div', {
      className: 'method-order'
    }, _react2.default.createElement('p', {
      className: 'method-order__description'
    }, 'Common convention for what the order should be for methods in ES6 React components.'), _react2.default.createElement('ol', {
      className: 'method-order__list'
    }, _react2.default.createElement('li', {
      className: 'method-order__list-item'
    }, _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'static'), ' declarations'), _react2.default.createElement('li', {
      className: 'method-order__list-item'
    }, _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'constructor')), _react2.default.createElement('li', {
      className: 'method-order__list-item'
    }, 'Lifecycle methods'), _react2.default.createElement('li', {
      className: 'method-order__list-item'
    }, _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'render')), _react2.default.createElement('li', {
      className: 'method-order__list-item'
    }, 'Your own functions and click handlers and/or event handlers')), _react2.default.createElement('div', {
      className: 'order-example'
    }, _react2.default.createElement('div', {
      className: 'order-example__label'
    }), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'export default class Component extends React.Component {\n  static displayName = \'\'\n  static propTypes = { ... }\n  constructor () { ... }\n  componentDidMount () { ... }\n  componentDidUpdate () { ... }\n  shouldComponentUpdate () { ... }\n  render () { ... }\n  onClick () { ... }\n  onChange () { ... }\n  addLayer () { ... }\n}\n          '))));
  };

  exports.default = Order;
});