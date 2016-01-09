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

    function Bindings(props) {
      _classCallCheck(this, Bindings);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bindings).call(this, props));

      _this.goodBind = _this.goodBind.bind(_this);
      _this.goodBindAttrs = _this.goodBindAttrs.bind(_this);
      _this.renderOdds = _this.renderOdds.bind(_this);
      _this.renderEvens = _this.renderEvens.bind(_this);
      _this.renderItem = _this.renderItem.bind(_this);
      return _this;
    }

    _createClass(Bindings, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', {
          className: 'bindings'
        }, _react2.default.createElement('p', null, _react2.default.createElement('code', {
          className: 'language-javascript'
        }, 'React.createClass'), ' used to use autobinding for all functions. This is not the greatest for performance so ES6 no longer autobinds functions in your components which means you now have to do it. Binding in the render method is not recommended as this will create a new function everytime the component rerenders.  Here is a ', _react2.default.createElement('strong', null, 'bad'), ' example:'), _react2.default.createElement('pre', {
          className: 'language-javascript'
        }, _react2.default.createElement('code', null, 'export default class Button extends React.Component {\n  render () {\n    return <button onClick={this.clicked.bind(this)}></button>;\n  }\n  clicked () {\n    console.log(\'this is bound\', this);\n  }\n}        ')), _react2.default.createElement('p', null, 'And here is a ', _react2.default.createElement('strong', null, 'good'), ' example, with binding being done in the constructor.'), _react2.default.createElement('pre', {
          className: 'language-javascript'
        }, _react2.default.createElement('code', null, 'export default class Button extends React.Component {\n  constructor (props) {\n    super(props);\n    this.clicked = this.clicked.bind(this);\n  }\n  render () {\n    return <button onClick={this.clicked}></button>;\n  }\n  clicked () {\n    console.log(\'this is bound\', this);\n  }\n}        ')), _react2.default.createElement('div', {
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
    }, {
      key: 'badBind',
      value: function badBind() {
        alert('this is bound in the render function');
      }
    }, {
      key: 'goodBind',
      value: function goodBind() {
        alert('this is ' + this);
      }
    }, {
      key: 'goodBindAttrs',
      value: function goodBindAttrs(evt) {
        alert('this is ' + this + ' and data-value = ' + evt.target.getAttribute('data-value'));
      }
    }, {
      key: 'renderOdds',
      value: function renderOdds(item) {
        if (item % 2 === 0) {
          return null;
        }

        return this.renderItem(item);
      }
    }, {
      key: 'renderEvens',
      value: function renderEvens(item) {
        if (item % 2 !== 0) {
          return null;
        }

        return this.renderItem(item);
      }
    }, {
      key: 'renderItem',
      value: function renderItem(item) {
        return _react2.default.createElement('span', null, item);
      }
    }]);

    return Bindings;
  }(_react2.default.Component);

  exports.default = Bindings;
});