import React from 'react';

const Container = (props) => {
  return (
    <div>
      <p>
        You can create container components that wrap other components to provide some basic styling or
        functionality.  They can render any children passed into them using the reserved prop name of children.
        This is good for Modals or sections like the ones used in this demo app. Below is a sample
        implementation of a container component. Also, see the Section component in source.
      </p>
      <pre className='language-javascript'><code>{`\
//- Container Component
const Modal = (props) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        {props.children}
      </div>
    </div>
  );
}
//- Component that uses the container
export default class ShareModal extends React.Component {
  render () {
    return (
      <Modal>
        <div>Some share stuff</div>
      </Modal>
    );
  }
}\
      `}</code></pre>
      <p>
        Controller components are components that behave as controller views.  They are often top level
        components that retrieve data from the stores, and pass them down into the children components. They
        are typically the only one in the hierarchy with a listener to the store and when the store changes,
        they pass the new state down the hierarchy.
      </p>
    </div>
  );
};

export { Container as default };
