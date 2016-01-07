import React from 'react';

const DynamicClass = (props) => {
  return (
    <pre className='language-javascript'><code>{`\
<div className={\`container \${this.props.active ? '' : 'hidden'}\`}></div>\
    `}</code></pre>
  );
}

export { DynamicClass as default };
