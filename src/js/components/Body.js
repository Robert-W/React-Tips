import DynamicClass from 'components/Concepts/DynamicClass';
import Container from 'components/Concepts/Container';
import LifeCycle from 'components/Concepts/LifeCycle';
import Stateless from 'components/Concepts/Stateless';
import PropTypes from 'components/Concepts/PropTypes';
import Prerender from 'components/Concepts/Prerender';
import Bindings from 'components/Concepts/Bindings';
import Modules from 'components/Concepts/Modules';
import Order from 'components/Concepts/Order';
import Section from 'components/Section';
import React from 'react';

export default class Body extends React.Component {
  render () {
    return (
      <div className='app-body'>
        <h1 className='inner-width'>React</h1>
        <Section title='ES6 Imports/Exports'><Modules /></Section>
        <Section title='Stateless components'><Stateless /></Section>
        <Section title='Specify prop requirements'><PropTypes /></Section>
        <Section title='Dynamic classNames'><DynamicClass /></Section>
        <Section title='Container/Controller components'><Container /></Section>
        <Section title='Method ordering'><Order /></Section>
        <Section title='Life cycle methods'><LifeCycle /></Section>
        <Section title='Function bindings'><Bindings /></Section>
        <Section title='Pure components'></Section>
        <Section title='Always Prerender'><Prerender /></Section>
        <Section title='Extra - Immutable.js'></Section>
        <h1 className='inner-width'>Flux</h1>
        <Section title='Alt.js'></Section>
        <Section title='Dispatcher'></Section>
        <Section title='Actions'></Section>
        <Section title='Stores'></Section>
      </div>
    );
  }
}
