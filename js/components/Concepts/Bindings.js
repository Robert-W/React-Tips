'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['exports', 'react'], function (exports, _react) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var list = [1, 2, 3, 4, 5];

  var Bindings = function (_React$Component) {
    _inherits(Bindings, _React$Component);

    function Bindings() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, Bindings);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Bindings)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.goodBind = function () {
        alert('this is ' + _this);
      }, _this.goodBindAttrs = function (evt) {
        alert('this is ' + _this + ' and data-value = ' + evt.target.getAttribute('data-value'));
      }, _this.renderOdds = function (item) {
        if (item % 2 === 0) {
          return null;
        }

        return _this.renderItem(item);
      }, _this.renderEvens = function (item) {
        if (item % 2 !== 0) {
          return null;
        }

        return _this.renderItem(item);
      }, _this.renderItem = function (item) {
        return _react2.default.createElement('span', null, item);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Bindings, [{
      key: 'badBind',
      value: function badBind() {
        alert('this is bound in the render function');
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', {
          className: 'bindings'
        }, _react2.default.createElement('p', null, _react2.default.createElement('code', {
          className: 'language-javascript'
        }, 'React.createClass'), ' used to use autobinding for all functions. This is not the greatest for performance so ES6 no longer autobinds functions in your components which means you now have to do it. Binding in the render method is not recommended as this will create a new function everytime the component rerenders.  Here is a ', _react2.default.createElement('strong', null, 'bad'), ' example:'), _react2.default.createElement('pre', {
          className: 'language-javascript'
        }, _react2.default.createElement('code', null, 'export default class Button extends React.Component {\n  render () {\n    return <button onClick={this.clicked.bind(this)}></button>;\n  }\n  clicked () {\n    console.log(\'this is bound\', this);\n  }\n}        ')), _react2.default.createElement('p', null, 'And here is a ', _react2.default.createElement('strong', null, 'good'), ' example, with the bound function defined as a class property'), _react2.default.createElement('pre', {
          className: 'language-javascript'
        }, _react2.default.createElement('code', null, 'export default class Button extends React.Component {\n  clicked = () => {\n    console.log(\'this is bound\', this);\n  };\n  render () {\n    return <button onClick={this.clicked}></button>;\n  }\n}        ')), _react2.default.createElement('div', {
          className: 'bindings__example'
        }, _react2.default.createElement('button', {
          onClick: this.badBind.bind(this)
        }, 'Bad'), _react2.default.createElement('button', {
          onClick: this.goodBind
        }, 'Good, No Arguments'), _react2.default.createElement('button', {
          onClick: this.goodBindAttrs,
          'data-value': 'Im a button'
        }, 'Good, No Arguments, has attributes')), _react2.default.createElement('div', {
          className: 'bindings__conditional-map'
        }, _react2.default.createElement('p', null, 'View source code to see an alternative method to passing parameters into a function inside [].map()'), _react2.default.createElement('div', null, _react2.default.createElement('h5', null, 'Evens'), list.map(this.renderEvens)), _react2.default.createElement('div', null, _react2.default.createElement('h5', null, 'Odds'), list.map(this.renderOdds))));
      }
    }]);

    return Bindings;
  }(_react2.default.Component);

  exports.default = Bindings;
});