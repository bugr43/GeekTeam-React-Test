import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleForm from './TitleForm';
import InputField from './InputField';
import LoginBtn from './LoginBtn';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auth: undefined, //Logged or Detied
      isProcess: false,
      login: '',
      password: '',
      trueLogin: true,
      truePassword: true
    }
    this.setPassword = this.setPassword.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setIsLogin = this.setIsLogin.bind(this);
  }

  setPassword(input) {
    this.setState({password: input})
  }

  setLogin(input) {
    this.setState({login: input});
  }


  setIsLogin(auth, err={}) {
    this.setState({
      auth: auth,
      trueLogin: err.login,
      truePassword: err.password
    });
  }

  render() {
    return (
      <div className="container">
        <form className='app text-center' action='/login' method='post'>
          <TitleForm
            data={this.state.auth === 'Logged' ?
              {icon: 'ok', text: 'Successful logged'} :
              {icon: 'fire', text: 'Login'}} />
          <InputField
            hasError={this.state.trueLogin ? '' : 'has-error'}
            type='text'
            placeholder='Input login'
            className={'form-control ' + (this.state.auth === 'Logged' ? 'none' : '')}
            setData={this.setLogin} />
          <InputField
            hasError={this.state.truePassword ? '' : 'has-error'}
            type='password'
            placeholder='Input password'
            className={'form-control ' + (this.state.auth === 'Logged' ? 'none' : '')}
            setData={this.setPassword} />
          <LoginBtn
            className={this.state.auth === 'Logged' ? 'none' : ''}
            data={this.state}
            setData={this.setIsLogin} />
        </form>
      </div>
    );
  }
}

export default App;
