import React, {Component} from 'react';
import $ from 'jquery';

export default class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    this.setState({isProcess: !this.state.isProcess});

    $.ajax({
        url: `/login`,
        method: 'post',
        data: {
          login: this.props.data.login,
          password: this.props.data.password
        }
      }).then((res) => {
        this.props.setData('Logged');
      }).fail((xhr) => {
        this.props.setData('Denied', JSON.parse(xhr.responseText))
      }).always((xhr) => {
        this.setState({
          isProcess: !this.state.isProcess
        });
      });
    }

  render() {
    return (
      <a
        className={'login btn btn-lg btn-default text-primary ' + this.props.className} 
        href='login' onClick={this.doLogin}>
        <span className={'text-primary ' + (this.state.isProcess ? 'glyphicon glyphicon-cog' :'innoBtn')}></span>
      </a>
    )
  }
}
