/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import '../../App.css';


class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      author: ''
    };
  }
  componentDidMount () {
    const { id } = this.props.match.params;

    fetch(`http://10.28.6.4:8080/v2/book/${id}`, {
  
      method: 'GET',
      headers: {
        'auth-token': JSON.parse(localStorage.getItem('auth-token')),
        'Content-Type': ' application/json'
      },
    }).then(res => {
      return res.json();
    })
      .then(book => {
        console.log(book);
        this.setState({
          author: book.author,
          name: book.name
        });
      }).catch(err => console.log(err));
  }

  render() {
    
    
    return (
      
      <div className="details">
          
        <div className="details__books-list">
          Name: {this.state.name} 
          <br/>
          Author: {this.state.author}
           
        </div>
      </div>      
    );
    
  }
}

export default Details;