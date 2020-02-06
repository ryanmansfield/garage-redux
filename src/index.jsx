// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch }
  from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const garageName = promopt("What is your garage name?");
const initialState = {
  garage: garageName,
  cars: [],
};

// State and reducers
const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

// Middleware
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);



// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
       <Route path="/:channel" component={App} />
       <Redirect from="/" to="/" />
     </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
