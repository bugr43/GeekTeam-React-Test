import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import InputField from '../components/InputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders component InputField', () => {
  const div = comcument.createElement('div');
  ReactDOM.render(<InpunField />, div);
})
