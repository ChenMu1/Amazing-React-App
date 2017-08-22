import React from 'react';
import Input from '../../../components/uielements/input';

class InputBox extends React.Component {
  render() {
    const { label, placeholder } = this.props;
    return (
      <div className="isoInputBox">
        <label>
          {label}
          {this.props.important ? <span>*</span> : null}
        </label>
        <Input size="large" placeholder={placeholder} />
      </div>
    );
  }
}
export default InputBox;
