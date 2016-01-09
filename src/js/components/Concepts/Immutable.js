import React from 'react';

const githubExample = 'https://github.com/Robert-W/immutable-flux-todo';
const codepenExample = 'http://codepen.io/Robert-W/pen/pgoPbO';

const Immutable = () => {
  return (
    <div>
      <div>
        <a href={githubExample} target='_blank'>{githubExample}</a>
      </div>
      <div>
        <a href={codepenExample} target='_blank'>{codepenExample}</a>
      </div>
    </div>
  );
};

export { Immutable as default };
