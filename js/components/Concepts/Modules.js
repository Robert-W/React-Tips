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

  var Modules = function Modules(props) {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'There are a few different patterns for imports and exports which are outlined below. Since most of our development with React will be in ES6, it would be a good idea to understand all these patterns.'), _react2.default.createElement('div', {
      className: 'modules__header'
    }, 'Exports:'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'export const config = {}\nexport const add function () {}\nexport const multiply function () {}        ')), _react2.default.createElement('div', {
      className: 'modules__header'
    }, 'Default exports:'), _react2.default.createElement('p', null, 'You can only have one default export per module. There are a couple of common patterns for default exports.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, '// For exporting a default class\nexport default class MyComponent extends React.Component { ... }\n// Exporting a declared constant as default\nconst myFunction function () {} // or const config = {}\nexport { myFunction as default };\n// Exporting anonymous functions or objects as default\nexport default {}\nexport default function () {}        ')), _react2.default.createElement('p', null, 'Technically you can have a default export and a named export in the same module, but I am not sure there are many cases for doing that.'), _react2.default.createElement('div', {
      className: 'modules__header'
    }, 'Import modules exported as default:'), _react2.default.createElement('p', null, 'This is the preferred pattern in my opinion.  Each module can only have one default export. Importing default modules can be done like so:'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'import App from \'components/App\';      ')), _react2.default.createElement('div', {
      className: 'modules__header'
    }, 'Import modules with many exports:'), _react2.default.createElement('p', null, 'Modules with many exports export an object with your named exports as properties of the object. So if you export functions foo, bar, and baz, your import may return an object like this.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, '{\n  foo: function () {},\n  bar: function () {},\n  vaz: function () {}\n}      ')), _react2.default.createElement('p', null, 'Which can be imported as follows:'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'import {foo, bar, baz} from \'lib/myModule\';      ')), _react2.default.createElement('div', {
      className: 'modules__header'
    }, 'Import modules with as:'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'import {superLongFunctionName as func} from \'lib/components/SuperLongModuleName\';\nfunc.doStuff();      ')), _react2.default.createElement('div', {
      className: 'modules__separator'
    }, 'or'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, 'import * as calc from \'lib/calculator\';\ncalc.add(2, 2);\ncalc.multiply(4, 2);      ')));
  };

  exports.default = Modules;
});