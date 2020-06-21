//App.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react-client/src/components/App.jsx';

it('should render App.jsx', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
