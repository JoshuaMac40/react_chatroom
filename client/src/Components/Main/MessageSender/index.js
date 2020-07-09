import React, { Component } from 'react';
import img from '../../../assets/send.png';

export default class MessageSender extends Component {
  state = {
    message: '',
  };

  style = {
    width: '40px',
    height: '40px',
    border: 'none',
  };

  handleSendMessage = (e) => {
    e.preventDefault();
    this.props.socket.emit('public message', {
      sender: this.props.socket.id,
      content: this.state.message,
      date: new Date(Date.now()),
    });
    this.setState({ message: '' });
  };

  render() {
    return (
      <footer className='message-sender'>
        <form action=''>
          <input
            type='text'
            placeholder='Enter text .'
            value={this.state.message}
            onChange={(e) => this.setState({ message: e.target.value })}
          />
          <button type='submit' onClick={(e) => this.handleSendMessage(e)}>
            <img src={img} style={this.style} alt='button' />
          </button>
        </form>
      </footer>
    );
  }
}
