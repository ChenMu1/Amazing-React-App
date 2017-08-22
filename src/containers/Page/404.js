import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/rob.png';

class FourZeroFour extends React.Component {
  render() {
    return (
      <div className="iso404Page">
        <div className="iso404Content">
          <h1>404</h1>
          <h3>Looks like you've got lost</h3>
          <p>The page you're looking for doesnt exist or has been moved.</p>
          <button type="button"><Link to="/dashboard">BACK HOME</Link></button>
        </div>

        <div className="iso404Artwork">
          <img alt="#" src={Image} />
        </div>
      </div>
    );
  }
}

export default FourZeroFour;
