/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Books from './components/list-books/list-books';
import NavBar from './components/nav-bar/nav-bar';

class App extends Component {
  constructor(props) {
    super(props);
    

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected() {
    
    
    this.props.history.push('/newBook');
    
    
  }
  /*
  reset = () => {
    this.props.onResetCounters();
    
  }
  */

  render() {
    console.log(this.props.listBooks);
    return (
      <div className="App">
        <div>
          <NavBar/>
        </div>
      
        <main className="App-header">
          

          <button className="App-button" onClick={() => { this.handleSelected(); }}>Add book</button>
          
        </main>
        <div>
          {this.props.listBooks.map(Book => <Books key={Book.id} id={Book.id}
            ind={this.props.listBooks.indexOf(Book)} book={Book} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listBooks: state.listBooks,
  };
};



export default connect(mapStateToProps)(App);
