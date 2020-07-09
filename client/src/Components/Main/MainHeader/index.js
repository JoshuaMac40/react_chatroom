import React, { Component } from 'react';

export default class MainHeader extends Component {
  render() {
    return (
      <header className='main-header'>
        <div className='recipient-details'>
          <div className='recipient-pp'></div>
          <p className='recipient-name'>{this.props.name}</p>
        </div>
        <div className='recipient-actions' />
      </header>
    );
  }
}
