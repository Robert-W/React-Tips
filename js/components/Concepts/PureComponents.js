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

  var codepenExample = 'http://codepen.io/Robert-W/pen/pgoPbO';

  var PureComponents = function PureComponents() {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Components are considered pure when they produce the same output when given the same props and state.'), _react2.default.createElement('p', null, 'In this situation, you can use ', _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'shouldComponentUpdate'), ' for a big performance boost.  This function returns true by default, if you return false, it skips updates for itself and its whole subtree. Remember with Pure Components, if a component is pure, all its children must be pure or they may be weird side effects.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'shouldComponentUpdate (nextProps, nextState) {\n  return shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState);\n}      ')), _react2.default.createElement('div', null, _react2.default.createElement('a', {
      href: codepenExample,
      target: '_blank'
    }, codepenExample)));
  };

  exports.default = PureComponents;
});