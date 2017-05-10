import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import reducers from './reducers';
import Nav from './components/nav';
import ChartsList from './components/chartList';
import ChartShow from './components/ChartShow';
import ChartNew from './components/ChartNew';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
        <Route path="/charts/new" component={ChartNew} />
        <Route path="/charts/:id" component={ChartShow} />
        <Route path='/' component={ChartsList} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
