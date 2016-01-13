import Header from 'components/Header';
import Body from 'components/Body';
import {config} from 'js/config';
import React from 'react';

export default class App extends React.Component {

  render () {
    return (
      <div className='app'>
        <Header title={config.title} />
        <Body />
      </div>
    );
  }

}
