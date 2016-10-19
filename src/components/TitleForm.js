import React, {Component} from 'react';

export default class TitleForm extends Component {
  render() {
    return (
      <div>
        <h2>
          <i className={'glyphicon glyphicon-'+this.props.data.icon}></i> 
          {this.props.data.text}
        </h2>
      </div>
    )
  }
}
