import React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

export default props => (
  <Button {...props}>
    {props.children}
  </Button>
);

export { ButtonGroup };
