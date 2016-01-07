# React Tips

This is an example app to demonstrate and explain some concepts, tips, preferred styles, and lessons learned while using React.  This particular app could have been written in markdown but I wanted to provide samples as well as snippets and explanations.  All of the concepts discussed have samples in the src or links to samples.

### Purpose
I developed this for a BlueRaster Brownbag/Training to demonstrate tips and tricks learned for other developers at BlueRaster.

### Getting Started

1. ```npm install```
2. ```npm start```
3. Visit [http://localhost:3000/](http://localhost:3000/)

### Demo
Coming Soon to gh-pages.

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
Please branch off of master and submit a pull request if you would like to add something to this.  Every item added should be added in the Body component in it's own Section component. Include snippets wherever possible to go with the explanation and even try to write your component in a way to demonstrate the concept your using if possible.

#### NOTE
At BlueRaster we are primarily an Esri shop, so this application is using Esri's JavaScript API, which leverages Dojo's AMD module loader. This is why this is getting transpiled to AMD and I'm not using something like Webpack. 
