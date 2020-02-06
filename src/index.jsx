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

import CarsIndex from './containers/cars_index';

// State and Reducers
import carsReducer from './reducers/cars_reducer';


const garageName = prompt("What is your garage name?");
const initialState = {
  garage: garageName,
  cars: [
  { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
],
};

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
      <div className="view-container">
        <Switch>
         <Route path="/" exact component={CarsIndex} />
       </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
