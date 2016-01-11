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

  var DynamicClass = function DynamicClass() {
    return _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, '<div className={`container ${this.props.active ? \'\' : \'hidden\'}`}></div>    '));
  };

  exports.default = DynamicClass;
});