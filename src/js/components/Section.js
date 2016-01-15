import React from 'react';

export default class Section extends React.Component {

  static displayName = 'Section';
  static propTypes = {
    title: React.PropTypes.string
  };

  render () {
    return (
      <section className='inner-width'>
        {this.props.title ? <div className='section__title'>{this.props.title}</div> : null}
        <div className='section__content'>
          {this.props.children}
        </div>
      </section>
    );
  }

}
