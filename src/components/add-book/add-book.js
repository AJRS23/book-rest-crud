import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../App.css';


class NewBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      author: '',
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  onAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(({ id }) => ({
      id: +new Date(),

    }));
    this.props.onAddBook(this.state);
  }

  

  render() {
    return (
      <div className="new-book">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> Name:
              <input type="text" value={this.state.name} onChange={this.onNameChange}></input> 
            </label>
            <label >Author
              <input type="text" value={this.state.author} onChange={this.onAuthorChange}></input>    
            </label>       
          </div>
          
          <input type="submit" value="Submit" disabled={this.state.value === ''}></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddBook: (newBook) => {
      dispatch({ type: 'ADD_BOOK', newBook});
      props.history.push('/app');
    }
  };
};

export default withRouter(connect(() => {}, mapDispatchToProps)(NewBook));

