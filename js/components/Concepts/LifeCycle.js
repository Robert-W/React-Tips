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

  var lifeCycleMethods = ['constructor(props) // replaces getInitialState and getDefaultProps from React.createClass', 'componentWillMount()', 'componentDidMount()', 'componentWillReceiveProps(nextProps)', 'shouldComponentUpdate(nextProps, nextState)', 'componentWillUpdate(nextProps, nextState)', 'componentDidUpdate(prevProps, prevState)', 'componentWillUnmount()', 'render()'];

  var itemMapper = function itemMapper(item) {
    return _react2.default.createElement('li', {
      className: 'lifecycle-methods__list-item'
    }, _react2.default.createElement('code', {
      className: 'language-javascript'
    }, item));
  };

  var LifeCycle = function LifeCycle() {
    return _react2.default.createElement('div', {
      className: 'lifecycle'
    }, _react2.default.createElement('p', {
      className: 'lifecycle-methods__description'
    }, 'Lifecycle methods will come in handy so you should know these very well and when to use them.  ', _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'shouldComponentUpdate'), ' will be discussed later but can make a big impact on performance.  ', _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'componentWillUpdate'), ' and   ', _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'componentDidUpdate'), ' are great ways to react to new props or state changes.  If your conditionally rendering components or removing them from the dom in your application, make sure to use ', _react2.default.createElement('code', {
      className: 'language-javascript'
    }, 'componentWillUnmount'), ' to remove any event listeners and do any cleanup.'), _react2.default.createElement('ul', {
      className: 'lifecycle-methods__list'
    }, lifeCycleMethods.map(itemMapper)));
  };

  exports.default = LifeCycle;
});