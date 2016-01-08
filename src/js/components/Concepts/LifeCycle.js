import React from 'react';

//- LifeCycle Methods
const lifeCycleMethods = [
  'constructor(props) // replaces getInitialState and getDefaultProps from React.createClass',
  'componentWillMount()',
  'componentDidMount()',
  'componentWillReceiveProps(nextProps)',
  'shouldComponentUpdate(nextProps, nextState)',
  'componentWillUpdate(nextProps, nextState)',
  'componentDidUpdate(prevProps, prevState)',
  'componentWillUnmount()',
  'render()'
];

//- Map Function
const itemMapper = (item) => <li className='lifecycle-methods__list-item'><code className='language-javascript'>{item}</code></li>;

//- Component
const LifeCycle = () => {
  return (
    <div className='lifecycle'>
      <p className='lifecycle-methods__description'>
        Lifecycle methods will come in handy so you should know these very well and when to use them.&nbsp;&nbsp;
        <code className='language-javascript'>shouldComponentUpdate</code> will be discussed later but can make
        a big impact on performance.&nbsp;&nbsp;<code className='language-javascript'>componentWillUpdate</code> and
        &nbsp; <code className='language-javascript'>componentDidUpdate</code> are great ways to react to new props or
        state changes.  If your conditionally rendering components or removing them from the dom in your application, make
        sure to use <code className='language-javascript'>componentWillUnmount</code> to remove any event listeners and do any cleanup.
      </p>
      <ul className='lifecycle-methods__list'>
        {lifeCycleMethods.map(itemMapper)}
      </ul>
    </div>
  );
};

export { LifeCycle as default };
