import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './nav-bar.css';
import {withRouter} from 'react-router-dom';


class NavBar extends Component {
  constructor(props) {
    super(props);

  }

  handleSelected() {
    
    // eslint-disable-next-line react/prop-types
    localStorage.clear();
    this.props.onLogout();
    this.props.history.push('/');
  }

  render() {
    
    return (
      
      <header>
        <nav className="navBar">
          <ul>
            <li>Welcome {JSON.parse(localStorage.getItem('username'))}</li>
            <li><button onClick={() => { this.handleSelected(); }}>Logout</button></li>
          </ul>
        </nav>
      </header>
    );
    
  }
}
const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch({ type: 'LOGOUT_USER' });
    }
  };
};

NavBar.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));