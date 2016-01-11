'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

define(['exports', 'components/Concepts/PureComponents', 'components/Concepts/DynamicClass', 'components/Concepts/Container', 'components/Concepts/LifeCycle', 'components/Concepts/Stateless', 'components/Concepts/PropTypes', 'components/Concepts/Prerender', 'components/Concepts/Immutable', 'components/Concepts/Bindings', 'components/Concepts/Modules', 'components/Concepts/Order', 'components/Section', 'react'], function (exports, _PureComponents, _DynamicClass, _Container, _LifeCycle, _Stateless, _PropTypes, _Prerender, _Immutable, _Bindings, _Modules, _Order, _Section, _react) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _PureComponents2 = _interopRequireDefault(_PureComponents);

  var _DynamicClass2 = _interopRequireDefault(_DynamicClass);

  var _Container2 = _interopRequireDefault(_Container);

  var _LifeCycle2 = _interopRequireDefault(_LifeCycle);

  var _Stateless2 = _interopRequireDefault(_Stateless);

  var _PropTypes2 = _interopRequireDefault(_PropTypes);

  var _Prerender2 = _interopRequireDefault(_Prerender);

  var _Immutable2 = _interopRequireDefault(_Immutable);

  var _Bindings2 = _interopRequireDefault(_Bindings);

  var _Modules2 = _interopRequireDefault(_Modules);

  var _Order2 = _interopRequireDefault(_Order);

  var _Section2 = _interopRequireDefault(_Section);

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

  var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
      _classCallCheck(this, Body);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
    }

    _createClass(Body, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', {
          className: 'app-body'
        }, _react2.default.createElement(_Section2.default, {
          title: 'ES6 Imports/Exports'
        }, _react2.default.createElement(_Modules2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Stateless components'
        }, _react2.default.createElement(_Stateless2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Specify prop requirements'
        }, _react2.default.createElement(_PropTypes2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Dynamic classNames'
        }, _react2.default.createElement(_DynamicClass2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Container/Controller components'
        }, _react2.default.createElement(_Container2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Method ordering'
        }, _react2.default.createElement(_Order2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Life cycle methods'
        }, _react2.default.createElement(_LifeCycle2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Function bindings'
        }, _react2.default.createElement(_Bindings2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Pure components'
        }, _react2.default.createElement(_PureComponents2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Always Prerender'
        }, _react2.default.createElement(_Prerender2.default, null)), _react2.default.createElement(_Section2.default, {
          title: 'Extra - Immutable.js'
        }, _react2.default.createElement(_Immutable2.default, null)));
      }
    }]);

    return Body;
  }(_react2.default.Component);

  exports.default = Body;
});