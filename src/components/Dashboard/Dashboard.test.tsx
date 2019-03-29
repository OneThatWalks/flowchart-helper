import React from 'react';
import ReactDOM from 'react-dom';
import GettingStarted from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
