import App from 'components/App';
import ReactDOM from 'react-dom';
import React from 'react';

//- Shim for rAF with timeout for callback
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

//- Init the App
ReactDOM.render(<App />, document.getElementById('root'));
