import React from 'react';

import './ParallaxBG.css';

class ParallaxBG extends React.Component {
  render() {
    return (
      <div className='parallax-bg'>
        <img src={this.props.img} />
      </div>
    )
  }
}

export default ParallaxBG;