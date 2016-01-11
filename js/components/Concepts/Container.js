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

  var Container = function Container(props) {
    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'You can create container components that wrap other components to provide some basic styling or functionality.  They can render any children passed into them using the reserved prop name of children. This is good for Modals or sections like the ones used in this demo app. Below is a sample implementation of a container component. Also, see the Section component in source.'), _react2.default.createElement('pre', {
      className: 'language-javascript'
    }, _react2.default.createElement('code', null, '//- Container Component\nconst Modal = (props) => {\n  return (\n    <div className=\'modal-wrapper\'>\n      <div className=\'modal\'>\n        {props.children}\n      </div>\n    </div>\n  );\n}\n//- Component that uses the container\nexport default class ShareModal extends React.Component {\n  render () {\n    return (\n      <Modal>\n        <div>Some share stuff</div>\n      </Modal>\n    );\n  }\n}      ')), _react2.default.createElement('p', null, 'Controller components are components that behave as controller views.  They are often top level components that retrieve data from the stores, and pass them down into the children components. They are typically the only one in the hierarchy with a listener to the store and when the store changes, they pass the new state down the hierarchy.'));
  };

  exports.default = Container;
});