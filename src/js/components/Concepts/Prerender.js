import React from 'react';

const Prerender = (props) => {
  return (
    <p>
      This is ideal for any application that is generating the UI with JavaScript. Dont load a blank page,
      wait for libs to load, and then render.  Use a node script to prerender your components and insert it into your html.
      View a prerender script here:<br />
      <a
        href='https://github.com/blueraster/snippets/tree/master/scripts/react-prerender'
        target='_blank'
      >
        https://github.com/blueraster/snippets/tree/master/scripts/react-prerender
      </a>
    </p>
  );
}

export { Prerender as default };
