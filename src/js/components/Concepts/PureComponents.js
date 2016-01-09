import React from 'react';

const codepenExample = 'http://codepen.io/Robert-W/pen/pgoPbO';

const PureComponents = () => {
  return (
    <div>
      <p>
        Components are considered pure when they produce the same output when given the same props and state.
      </p>
      <p>
        In this situation, you can use <code className='language-javascript'>shouldComponentUpdate</code> for a
        big performance boost.  This function returns true by default, if you return false, it skips updates for
        itself and its whole subtree. Remember with Pure Components, if a component is pure, all its children must
        be pure or they may be weird side effects.
      </p>
      <pre className='language-javascript'><code>{`\
shouldComponentUpdate (nextProps, nextState) {
  return shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState);
}\
      `}</code></pre>
      <div>
        <a href={codepenExample} target='_blank'>{codepenExample}</a>
      </div>
    </div>
  );
};

export { PureComponents as default };
