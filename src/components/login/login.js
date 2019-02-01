/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './login.css';
import {withRouter} from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '',password:'' };

    this.handleChange = this.handleChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.username + this.state.password) ;
    event.preventDefault();
    fetch('http://localhost:8080/v2/user/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({

        username: this.state.username,
        password: this.state.password
      })
    })
      .then((res) => res.json())
      .then((data) => { 
        localStorage.setItem('auth-token', JSON.stringify(data.token));
        localStorage.setItem('username', JSON.stringify(data.username));
        console.log(JSON.parse(localStorage.getItem('auth-token')));
        this.props.onLogin();
        this.props.history.push('/app');
      })
      .catch((err)=>console.log(err));
    
  }


  render() {

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
                    Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
                    Password:
            <input type="password" value={this.state.password} onChange={this.passwordChange} />
          </label>
          <input type="submit" value="Submit" disabled={this.state.username === ''} />
        </form>
      </div>
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
    onLogin: () => {
      dispatch({ type: 'LOGIN'});
    }
  };
};

Login.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));