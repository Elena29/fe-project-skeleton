import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Todo from './todo/index';

const NoMatch = React.createClass({
  render() {
    return (<div>No match found for such url</div>);
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="todo" component={Todo} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'));