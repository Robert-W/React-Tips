import React from 'react';

const Order = () => {
  return (
    <div className='method-order'>
      <p className='method-order__description'>
        Common convention for what the order should be for methods in ES6 React components.
      </p>
      <ol className='method-order__list'>
        <li className='method-order__list-item'>
          <code className='language-javascript'>static</code> declarations
        </li>
        <li className='method-order__list-item'>
          <code className='language-javascript'>constructor</code>
        </li>
        <li className='method-order__list-item'>
          Lifecycle methods
        </li>
        <li className='method-order__list-item'>
          Your own functions and click handlers and/or event handlers
        </li>
        <li className='method-order__list-item'>
          <code className='language-javascript'>render</code>
        </li>
      </ol>
      <div className='order-example'>
        <div className='order-example__label'></div>
        <pre className='language-javascript'><code>{`\
export default class Component extends React.Component {
  static displayName = ''
  static propTypes = { ... }
  constructor () { ... }
  componentDidMount () { ... }
  componentDidUpdate () { ... }
  shouldComponentUpdate () { ... }
  onClick () { ... }
  onChange () { ... }
  addLayer () { ... }
  render () { ... }
}
          `}
        </code></pre>
      </div>
    </div>
  );
};

export { Order as default };
