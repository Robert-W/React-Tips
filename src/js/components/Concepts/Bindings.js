import React from 'react';

let list = [1, 2, 3, 4, 5];

export default class Bindings extends React.Component {

  constructor (props) {
    super(props);

    this.goodBind = this.goodBind.bind(this);
    this.goodBindAttrs = this.goodBindAttrs.bind(this);
    //- Functions for maps, only do this if the map function
    //- needs access to this, otherwise, you don't need to bind
    this.renderOdds = this.renderOdds.bind(this);
    this.renderEvens = this.renderEvens.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  render () {
    return (
      <div className='bindings'>
        <p>
          <code className='language-javascript'>React.createClass</code> used to use autobinding for all functions.
          This is not the greatest for performance so ES6 no longer autobinds functions in your components which means
          you now have to do it. Binding in the render method is not recommended as this will create a new function
          everytime the component rerenders.  Here is a <strong>bad</strong> example:
        </p>
        <pre className='language-javascript'><code>{`\
export default class Button extends React.Component {
  render () {
    return <button onClick={this.clicked.bind(this)}></button>;
  }
  clicked () {
    console.log('this is bound', this);
  }
}\
        `}</code></pre>
        <p>
          And here is a <strong>good</strong> example, with binding being done in the constructor.
        </p>
        <pre className='language-javascript'><code>{`\
export default class Button extends React.Component {
  constructor (props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  render () {
    return <button onClick={this.clicked}></button>;
  }
  clicked () {
    console.log('this is bound', this);
  }
}\
        `}</code></pre>
        <div className='bindings__example'>
          <button onClick={this.badBind.bind(this)}>Bad</button>
          <button onClick={this.goodBind}>Good, No Arguments</button>
          <button onClick={this.goodBindAttrs} data-value='Im a button' >Good, No Arguments, has attributes</button>
        </div>
        <div className='bindings__conditional-map'>
          <p>View source code to see an alternative method to passing parameters into a function inside [].map()</p>
          <div>
            <h5>Evens</h5>
            {list.map(this.renderEvens)}
          </div>
          <div>
            <h5>Odds</h5>
            {list.map(this.renderOdds)}
          </div>
        </div>
      </div>
    );
  }

  badBind () {
    alert('this is bound in the render function');
  }

  goodBind () {
    alert(`this is ${this}`);
  }

  goodBindAttrs (evt) {
    alert(`this is ${this} and data-value = ${evt.target.getAttribute('data-value')}`);
  }

  //- Map Functions
  renderOdds (item) {
    //- return null for evens
    if (item % 2 === 0) { return; }
    return this.renderItem(item);
  }

  renderEvens (item) {
    //- return null for odds
    if (item % 2 !== 0) { return; }
    return this.renderItem(item);
  }

  renderItem (item) {
    return <span>{item}</span>
  }

}
