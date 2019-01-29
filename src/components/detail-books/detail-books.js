import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router';
import '../../App.css';


class Details extends Component {
  render() {
      
    if (this.props.book != null) {
      return (
        <div className="details">
          <div className="details__book">{this.props.book.name}</div>
          <div className="details__books-list">
            <div key={this.props.book.author} className="details__book">
              {this.props.book.author}
            </div>)}
          </div>
        </div>      
      );
    } else {
      return (
        <div>No Book selected</div>
      );
    }  
  }
}

export default Details;