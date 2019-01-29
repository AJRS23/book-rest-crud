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
  listBooks: [
    {
      id: 'f59a185b-684c-4079-81f8-f44a51fa7564',
      name: 'Book1',
      author: 'Alvaro'
    },
    {
      id: 'f59a185b-684c-4079-81f8-f44a5fsfsfs',
      name: 'Book2',
      author: 'Pepe'
    }

  ],
  userLogin: {}
};


function reducer(state = initialState, action) {
  let newBooks=[];
  switch (action.type) {
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
  case 'ADD_USER':
    return Object.assign(
      {},
      state, {
        userLogin: action.userLogin
      }
    );

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
        <Route exact path="/details" component={Details} />
        <Route exact path="/newBook" component={addBook} />
      </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
