import React from 'react';
import Input from '../../../components/uielements/input';
import Select from '../../../components/uielements/select';
import Checkbox from '../../../components/uielements/checkbox';
import InputBox from './input-box';

const Option = Select.Option;

class BillingForm extends React.Component {
  handleOnChange = checkedValues => {
    console.log('checked = ', checkedValues);
  };

  render() {
    return (
      <div className="isoBillingForm">
        <div className="isoInputFieldset">
          <InputBox label="First Name" important />
          <InputBox label="Last Name" important />
        </div>

        <div className="isoInputFieldset">
          <InputBox label="Company Name" />
        </div>

        <div className="isoInputFieldset">
          <InputBox label="Email Address" important />
          <InputBox label="Mobile No" />
        </div>

        <div className="isoInputFieldset">
          <div className="isoInputBox">
            <label>Country</label>
            <Select size="large" defaultValue="unitedstate">
              <Option value="argentina">Argentina</Option>
              <Option value="australia">Australia</Option>
              <Option value="brazil">Brazil</Option>
              <Option value="france">France</Option>
              <Option value="germany">Germany</Option>
              <Option value="southafrica">South Africa</Option>
              <Option value="spain">Spain</Option>
              <Option value="unitedstate">United State</Option>
              <Option value="unitedkingdom">United Kingdom</Option>
            </Select>
          </div>

          <InputBox label="City" />
        </div>

        <div className="isoInputFieldset vertical">
          <InputBox label="Address" placeholder="Address" />
          <Input
            size="large"
            placeholder="Apartment, suite, unit etc. (optional)"
            style={{ marginTop: '35px' }}
          />
        </div>

        <Checkbox onChange={this.handleOnChange}>Create an account?</Checkbox>
      </div>
    );
  }
}
export default BillingForm;
