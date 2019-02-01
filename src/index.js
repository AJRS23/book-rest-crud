/* eslint-disable no-fallthrough */
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
  customer: '',
  isLoggedIn: false
};


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
    return Object.assign(
      {},
      state, {
        isLoggedIn: true
      }
    );

  case 'LOGOUT_USER':
    return Object.assign(
      {},
      state, {
        userLogin: '',
        isLoggedIn: false
      }
    );

  case 'RENEW_TOKEN':
    fetch('http://localhost:8080/v2/user/renew', {
      method: 'POST',
      headers: { 
        'auth-token': JSON.parse(localStorage.getItem('auth-token'))},
    })
      .then((res) => res.json())
      .then((data) =>  
      {
        localStorage.setItem('auth-token', JSON.stringify(data.token));
        console.log(data);
      })
      .catch((err)=>console.log(err));
    

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
