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

  var Stateless = function Stateless() {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Stateless functions are ideal.  They only render props and sometimes trigger actions. These are the most reusable components and even have a special shorthand syntax.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'let MyComponent = (props) => {\n  return (\n    <div className=\'my-component\'>\n      <h3 className=\'my-component__name\'>{props.name}</h3>\n    </div>\n  );\n};      ')));
  };

  exports.default = Stateless;
});