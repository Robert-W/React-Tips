import React from 'react';

/*
<pre className='language-javascript'><code>{`\

`}</code></pre>
*/

const Modules = (props) => {
  return (
    <div>
      <p>
        There are a few different patterns for imports and exports which are outlined below. Since most
        of our development with React will be in ES6, it would be a good idea to understand all these patterns.
      </p>
      <div className='modules__header'>Exports:</div>
        <pre className='language-javascript'><code>{`\
export const config = {}
export const add function () {}
export const multiply function () {}\
        `}</code></pre>
      <div className='modules__header'>Default exports:</div>
        <p>
          You can only have one default export per module. There are a couple of common patterns for default exports.
          <pre className='language-javascript'><code>{`\
// For exporting a default class
export default class MyComponent extends React.Component { ... }
// Exporting a declared constant as default
const myFunction function () {} // or const config = {}
export { myFunction as default };
// Exporting anonymous functions or objects as default
export default {}
export default function () {}\
          `}</code></pre>
        Technically you can have a default export and a named export in the same module, but I am not sure there
        are many cases for doing that.
        </p>
      <div className='modules__header'>Import modules exported as default:</div>
      <p>
        This is the preferred pattern in my opinion.  Each module can only have one default export.
        Importing default modules can be done like so:
        <pre className='language-javascript'><code>{`\
import App from 'components/App';\
        `}</code></pre>
      </p>
      <div className='modules__header'>Import modules with many exports:</div>
      <p>
        Modules with many exports export an object with your named exports as properties of the object.
        So if you export functions foo, bar, and baz, your import may return an object like this.
        <pre className='language-javascript'><code>{`\
{
  foo: function () {},
  bar: function () {},
  vaz: function () {}
}\
        `}</code></pre>
        Which can be imported as follows:
        <pre className='language-javascript'><code>{`\
import {foo, bar, baz} from 'lib/myModule';\
        `}</code></pre>
      </p>
      <div className='modules__header'>Import modules with as:</div>
      <pre className='language-javascript'><code>{`\
import {superLongFunctionName as func} from 'lib/components/SuperLongModuleName';
func.doStuff();\
      `}</code></pre>
      <div className='modules__separator'>or</div>
      <pre className='language-javascript'><code>{`\
import * as calc from 'lib/calculator';
calc.add(2, 2);
calc.multiply(4, 2);\
      `}</code></pre>
    </div>
  );
};

export { Modules as default };
