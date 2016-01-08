# React Tips

This example app attempts to demonstrate and explain concepts, tips, preferred styles, and lessons learned while I've been using React. While this could have been written in markdown (and would have been much easier to maintain), I wanted to provide samples as well as snippets and explanations. All of the concepts discussed have samples in the source code or links to external examples. You can read all about the tips, tricks, concepts, etc. at the demo link.

## Demo
Coming Soon to gh-pages.

### Still under development - Items to complete
1. [] Pure Components Example/Tips
2. [] Prerender Example
3. [] Immutable.js Link/Tips
4. [] Alt.js Tips
5. [] Dispatcher Example/Tips
6. [] Actions Example/Tips
7. [] Stores Example/Tips
8. [] Add build script for CI to generate code for gh-pages
8. [] Circle CI to automate deployment to gh-pages
9. [] Add eslint

### Purpose
This was developed for a BlueRaster Brownbag/Training to demonstrate tips and tricks learned for other developers.

### Getting Started

1. ```npm install```
2. ```npm start```
3. Visit [http://localhost:3000/](http://localhost:3000/)

#### Resources
1. [React](https://facebook.github.io/react/)
2. [Flux](https://facebook.github.io/flux/)
3. [ES6/Babel](https://babeljs.io/docs/learn-es2015/)
4. [Alt.js](http://alt.js.org/)
5. [Redux](http://rackt.org/redux/)

#### Examples
1. [Immutable Flux Todo](https://github.com/Robert-W/immutable-flux-todo)
2. [Immutable shouldComponentUpdate](http://codepen.io/Robert-W/pen/pgoPbO)

#### Contributing
Please branch off of master and submit a pull request if you would like to contribute.  Add a concept in the Body component inside it's own Section component. Include snippets wherever possible to go with the explanation and even try to write your component in a way to demonstrate the concept your using if possible.

#### NOTE
At BlueRaster we are primarily an Esri shop, so this application uses Esri's JavaScript API which uses Dojo's AMD module loader. This is why the source code is getting transpiled to AMD and I'm not using something like Webpack.
