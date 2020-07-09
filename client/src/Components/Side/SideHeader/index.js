import React, { Component } from 'react';

export default class SideHeader extends Component {
  render() {
    this.rImages = [
      require('../../../assets/image1.png'),
      require('../../../assets/image2.png'),
      require('../../../assets/image3.png'),
      require('../../../assets/image4.png'),
      require('../../../assets/image5.png'),
      require('../../../assets/image6.png'),
      require('../../../assets/image7.png'),
      require('../../../assets/image8.png'),
      require('../../../assets/image9.png'),
    ];
    var randomInt = Math.floor(Math.random() * this.rImages.length);
    var rImage = this.rImages[randomInt];

    return (
      <header className='side-header'>
        <div className='user-details'>
          <div className='user-pp'>
            <img src={rImage} alt='user-pic' />
          </div>
          <p className='username'>user:{this.props.name.toUpperCase()}</p>
        </div>
        {/* <div className='user-actions'>
          <button className='add-contact'> + </button>
        </div> */}
      </header>
    );
  }
}
