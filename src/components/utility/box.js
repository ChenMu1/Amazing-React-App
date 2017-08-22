import React from 'react';
import BlockTitle from './blockTitle';

export default props => (
  <div className="isoBoxWrapper">
    <BlockTitle title={props.title} subtitle={props.subtitle} />
    {props.children}
  </div>
);
