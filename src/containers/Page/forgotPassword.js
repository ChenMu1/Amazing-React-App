import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="isoForgotPassPage">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">Isomorphic</Link>
          </div>

          <div className="isoFormHeadText">
            <h3>Forgot Password?</h3>
            <p>Enter your email and we send you a reset link.</p>
          </div>

          <div className="isoForgotPassForm">
            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">Send request</Button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ForgotPassword;
