import React, {Component} from 'react';

export default class InputField extends Component {
  onChangheHandle(e) {
    e.preventDefault();
    this.props.setData(e.target.value);
  }

  render() {
    return (
      <div className={'form-group ' + this.props.hasError}>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className={this.props.className}
          value={this.props.value}
          onChange={this.onChangheHandle.bind(this)} />
      </div>
    )
  }
}
