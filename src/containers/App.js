import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <div>
          <Route path="/" component={Receipts} />
          <Route path="/about" component={About} />
          <Route path="/add" component={Form} />
          <Route path="*" component={NoMatch} />
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
