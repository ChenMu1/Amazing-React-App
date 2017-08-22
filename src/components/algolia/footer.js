import React from 'react';
import AlgoliaLogo from '../../image/algolia.svg';

const Footer = () =>
  <footer className="isoAlgoliaFooter">
    <span>Powred by</span>
    <div className="isoLogoWrapper">
      <img alt="#" src={process.env.PUBLIC_URL + AlgoliaLogo} />
    </div>
  </footer>;

export default Footer;
