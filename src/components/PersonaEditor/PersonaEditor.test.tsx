import React from 'react';
import ReactDOM from 'react-dom';
import PersonaEditor from './PersonaEditor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonaEditor personaId={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
