import React from 'react';
import { Link } from 'react-router-dom';

export default function({ collapsed }) {
  return (
    <div className="isoLogoWrapper">
      {collapsed
        ? <div>
            <h3>
              <Link to="/dashboard">
                <i className="ion-flash" />
              </Link>
            </h3>
          </div>
        : <h3>
            <Link to="/dashboard">ISOMORPHIC</Link>
          </h3>}
    </div>
  );
}
