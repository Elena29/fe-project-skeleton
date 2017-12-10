import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// Import all css files
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
