import React from 'react';

/*
<pre className='language-javascript'><code>{`\

`}</code></pre>
*/

const Modules = (props) => {
  return (
    <div>
      <p>There are a few different patterns for imports and exports which are outlined below.</p>
      <div className='modules__header'>Exports:</div>

      <div className='modules__header'>Default exports:</div>

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
