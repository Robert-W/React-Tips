import React from 'react';

let Header = (props) => {
  return (
    <header className='app-header'>
      <h3 className='app-header__title inner-width'>{props.title}</h3>
    </header>
  );
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export { Header as default };
