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

  var Header = function Header(props) {
    return _react2.default.createElement('header', {
      className: 'app-header'
    }, _react2.default.createElement('h3', {
      className: 'app-header__title inner-width'
    }, props.title));
  };

  Header.propTypes = {
    title: _react2.default.PropTypes.string.isRequired
  };
  exports.default = Header;
});