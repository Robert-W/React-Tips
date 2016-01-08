import React from 'react';

const PropTypes = () => {
  return (
    <div>
      <p>
        Define propTypes that the component needs to function.  You can also specify whether or not
        the prop is required.  There are two ways of declaring these.  In an ES6 class you can specify
        them as a static property.
      </p>
      <pre className='language-javascript'><code>{`\
export default class Button extends React.Component {
  static propTypes = {
    label: React.PropTypes.string
  }
}\
      `}</code></pre>
      <p>
        With stateless components using the function shorthand, you specify them like below:
      </p>
      <pre className='language-javascript'><code>{`\
let Button = (props) => <button>{props.label}</button>
Button.propTypes = {
  label: React.PropTypes.string.isRequired
}\
      `}</code></pre>
    </div>
  );
};

export { PropTypes as default };
