import React, { Component } from 'react';
import Contact from './Contact';
import SideHeader from './SideHeader';

export default class Side extends Component {
  handleSelectContact = (username) => {
    this.props.onSelectContact(username);
  };
  render() {
    //

    this.rImages = [
      require('../../assets/image1.png'),
      require('../../assets/image2.png'),
      require('../../assets/image3.png'),
      require('../../assets/image4.png'),
      require('../../assets/image6.png'),
      require('../../assets/image7.png'),
      require('../../assets/image8.png'),
      require('../../assets/image9.png'),
    ];
    var randomInt = Math.floor(Math.random() * this.rImages.length);
    var rImage = this.rImages[randomInt];
    var rImage2 = this.rImages[randomInt];
    //
    return (
      <div className='side'>
        <SideHeader name={this.props.username} pic={rImage} />
        <section className='contacts'>
          {this.props.users
            ? this.props.users.map((user) => {
                if (user !== this.props.username) {
                  // if username contains spaces, remove it
                  let id = user.replace(/\s/g, '');
                  return (
                    <Contact
                      key={user}
                      id={id}
                      name={user}
                      pic={rImage2}
                      onSelect={this.handleSelectContact}
                    />
                  );
                } else return null;
              })
            : 'Loading...'}
        </section>
      </div>
    );
  }
}
