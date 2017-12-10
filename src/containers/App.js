import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Header from '../header/index';
import Receipts from './ReceiptsList';
import About from '../header/about';
import Form from '../containers/FormContainer';
import configureStore from '../store/configureStore';

const NoMatch = () => (
  <div>
    No match found for such url
  </div>
);

const store = configureStore();

const App = () => (
  <div>
    <Header />
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Receipts} />
          <Route path="/about" component={About} />
          <Route path="/add" component={Form} />
          <Route path="*" component={NoMatch} />
        </Router>
    </Provider>
  </div>
);

export default App;
