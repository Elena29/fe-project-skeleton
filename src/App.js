import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './header/index';
import Like from './likes/index';

const NoMatch = () => (
  <div>
    No match found for such url
  </div>
);

const App = () => (
  <div>
    <Header />
    <Router history={browserHistory}>
      <Route path="/" component={Like} />
      <Route path="*" component={NoMatch} />
    </Router>
  </div>
);

export default App;
