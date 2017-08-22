import React from 'react';

export default props => (
  <div
    className={
      props.className != null
        ? `${props.className} isoLayoutContentWrapper`
        : 'isoLayoutContentWrapper'
    }
  >
    {props.children}
  </div>
);
