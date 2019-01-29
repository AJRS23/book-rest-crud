/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Details from './components/detail-books/detail-books';
import addBook from './components/add-book/add-book';


const initialState = {
  listBooks: [ ],
  customer: ''
};



function getLocalStorage() {
  return JSON.parse(localStorage.getItem('counterAppData'));
}

function saveLocalStorage(newState) {
  return localStorage.setItem('counterAppData', JSON.stringify(newState));
}

function getSessionStorage() {
  return sessionStorage.getItem('loggedUser') || '';
}

function saveSessionStorage(username) {
  return sessionStorage.setItem('loggedUser', username);
}


function reducer(state = initialState, action) {
  let newBooks=[];
  switch (action.type) {
  case 'GET_BOOKS':
    return Object.assign(
      {},
      state, {
        listBooks: action.listBooks
      }
    );
  case 'ADD_BOOK':
    return Object.assign(
      {},
      state, {
        listBooks: state.listBooks.concat([action.newBook]),
      });
  case 'DELETE_BOOK':
    newBooks = [
      ...state.listBooks
    ];
    newBooks.splice(action.indexBook, 1);
    return {
      ...state,
      listBooks: newBooks,
    };
  case 'LOGIN':
    console.log('entro aquiii '+action.newCustomer);
    return Object.assign(
      {},
      state, {
        customer: action.newCustomer
      }
    );
    /*
      case 'INCREASE_COUNTER':
          
          let newC = [
              ...state.listCounters
          ];
          newC[action.indexCounter].clickCount ++
          return {
              ...state,
              listCounters: newC
          
          };

      case 'DELETE_COUNTER':
          newCounters = [
              ...state.listCounters
          ];
          newCounters.splice(action.indexCounter, 1);
          return {
              ...state,
              listCounters: newCounters,
              count: state.count - 1
          };
      
      case 'RESET_COUNTER':
          newCounters = [
              ...state.listCounters
          ];
          newCounters[action.indexCounter].clickCount = 0
          return {
              ...state,
              listCounters: newCounters
          
          };
      
      case 'BLOCK_COUNTER':
          newCounters = [
              ...state.listCounters
          ];
          newCounters[action.indexCounter].blocked = !newCounters[action.indexCounter].blocked
          return {
              ...state,
              listCounters: newCounters
          
          };
      
      case 'RESET_COUNTERS':
          newCounters = [
              ...state.listCounters
          ];
          newCounters.forEach(counter => {
              counter.clickCount = 0
          });
          return {
              ...state,
              listCounters: newCounters
          
          };
  

      case 'ADD_LIMIT':

          return Object.assign(
              {},
              state, {
                  countersLimit: action.countersLimit
              }
          );
*/
  
    

  case 'LOGOUT_USER':
    return Object.assign(
      {},
      state, {
        userLogin: ''
      }
    );
      



  default:
    return state;
  }
}



let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={App} />
        <Route exact path="/newBook" component={addBook} />
        <Route path='/book/:id' component={Details}></Route>
      </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
