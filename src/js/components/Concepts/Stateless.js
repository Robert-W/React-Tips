import React from 'react';

const Stateless = () => {
  return (
    <div>
      <p>
        Stateless functions are ideal.  They only render props and sometimes trigger actions.
        These are the most reusable components and even have a special shorthand syntax.
      </p>
      <pre className='language-javascript'><code>{`\
let MyComponent = (props) => {
  return (
    <div className='my-component'>
      <h3 className='my-component__name'>{props.name}</h3>
    </div>
  );
};\
      `}</code></pre>
  </div>
  );
};

export { Stateless as default };
