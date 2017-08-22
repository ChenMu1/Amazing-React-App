import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import Auth0 from '../../helpers/auth0/index';
import Firebase from '../../helpers/firebase';
import FirebaseLogin from '../../components/firebase';

const { login } = authAction;

class SignUp extends React.Component {
  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    const { login } = this.props;
    login();
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="isoSignUpPage">
        <div className="isoSignUpContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">Isomorphic</Link>
          </div>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper isoLeftRightComponent">
              <Input size="large" placeholder="First name" />
              <Input size="large" placeholder="Last name" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Username" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" type="password" placeholder="Password" />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="isoInputWrapper">
              <Checkbox>I agree with terms and condtions</Checkbox>
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">Sign up</Button>
            </div>
            <div className="isoInputWrapper isoOtherLogin">
              <Button onClick={this.handleLogin} type="primary btnFacebook">
                Sign up with Facebook
              </Button>
              <Button onClick={this.handleLogin} type="primary btnGooglePlus">
                Sign up with Google Plus
              </Button>
              {Auth0.isValid &&
                <Button
                  onClick={() => {
                    Auth0.login();
                  }}
                  type="primary btnAuthZero"
                >
                  Sign up with Auth0
                </Button>}

              {Firebase.isValid &&
                <FirebaseLogin signup={true} login={this.handleLogin} />}
            </div>
            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
              <Link to="/signin">Already have an account? Sign in.</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false
  }),
  { login }
)(SignUp);
