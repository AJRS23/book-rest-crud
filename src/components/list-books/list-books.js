/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list-books.css';
import {withRouter} from 'react-router-dom';

class CounterContainer extends Component {



  constructor(props) {
    super(props);

        

    this.handleSelected = this.handleSelected.bind(this);
  }
  /*
    increase = () => {
        if (!this.props.coun.blocked) {
            

            this.props.onIncreaseCounter(this.props.ind);
            
            
        }

    };
    
    reset = () => {
        this.props.onResetCounter(this.props.ind);
        
    }
    block = () => {
        this.props.onBlockCounter(this.props.ind);
    }
    details = () => {
        this.props.history.push(`/details`);
    }
    */
   

  handleSelected(indexBook) {
    this.props.onDeleteBook(indexBook);
  }
  details = () => {
    this.props.history.push('/details');
  
  }

  render() {
        
    console.log(this.props.id);
    console.log(this.props.ind);
    //console.log(this.props.coun);
    return (
      <div className="book-container">
        {this.props.book.name}
        {this.props.book.author}
                
        <button className="Delete-button" onClick={() => { this.handleSelected(this.props.ind); }}>Delete</button>
        <button className="Details-button" onClick={this.details}>Details</button>
                
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