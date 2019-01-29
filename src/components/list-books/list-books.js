/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list-books.css';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

class CounterContainer extends Component {



  constructor(props) {
    super(props);

        

    this.handleSelected = this.handleSelected.bind(this);
  }
  
   

  handleSelected(idBook, indBook) {
    fetch('http://10.28.6.4:8080/book/' + '/' + idBook, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json', 'customer': 'aramirez'}
    })
      .then((res) => {
        this.props.onDeleteBook(indBook);
      })
      
      .catch((err)=>console.log(err));
  
  }
  details = () => {
    this.props.history.push('/details');
  
  }
  

  render() {
        
    console.log('Este es el id' + this.props.id);
    console.log(this.props.ind);
    //console.log(this.props.coun);
    return (
      <div className="book-container">
        Name: {this.props.book.name}
        <br/>
        Author: {this.props.book.author}
        <br/>       
        <button className="Delete-button" onClick={() => { this.handleSelected(this.props.id, this.props.ind); }}>Delete</button>
        <Link to={`/book/${this.props.id}`}><i>Edit</i></Link>
                
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
        
    listBooks: state.listBooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteBook: (indexBook) => {
      dispatch({ type: 'DELETE_BOOK', indexBook });
    },
    
        
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterContainer));