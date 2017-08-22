import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../image/rob.png';

class FiveHundred extends React.Component {
  render() {
    return (
      <div className="iso500Page">
        <div className="iso500Content">
          <h1>500</h1>
          <h3>Internal Server Error</h3>
          <p>Something went wrong. Please try again letter.</p>
          <button type="button"><Link to="/dashboard">BACK HOME</Link></button>
        </div>

        <div className="iso500Artwork">
          <img alt="#" src={Image} />
        </div>
      </div>
    );
  }
}

export default FiveHundred;
