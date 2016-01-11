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

  var PropTypes = function PropTypes() {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Define propTypes that the component needs to function.  You can also specify whether or not the prop is required.  There are two ways of declaring these.  In an ES6 class you can specify them as a static property.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'export default class Button extends React.Component {\n  static propTypes = {\n    label: React.PropTypes.string\n  }\n}      ')), _react2.default.createElement('p', null, 'With stateless components using the function shorthand, you specify them like below:'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'let Button = (props) => <button>{props.label}</button>\nButton.propTypes = {\n  label: React.PropTypes.string.isRequired\n}      ')));
  };

  exports.default = PropTypes;
});