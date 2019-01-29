import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './nav-bar.css';
import {withRouter} from 'react-router-dom';



class NavBar extends Component {

  handleSelected() {
    
    // eslint-disable-next-line react/prop-types
    this.props.onDeleteUser();
    this.props.history.push('/');
  }

  render() {

    return (
      <header>
        <nav className="navBar">
          <ul>
            <li>Welcome {this.props.userLogin.name}</li>
            <li><button onClick={() => { this.handleSelected(); }}>Logout</button></li>
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: () => {
      dispatch({ type: 'DELETE_USER' });
    }
  };
};

NavBar.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));