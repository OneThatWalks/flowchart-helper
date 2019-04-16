import React from 'react';
import ReactDOM from 'react-dom';
import UlNavLink from './UlNavLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UlNavLink name={'Test'} value={'test'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
