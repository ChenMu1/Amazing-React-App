import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import Auth0 from '../../helpers/auth0';
import Firebase from '../../helpers/firebase';
import FirebaseLogin from '../../components/firebase';

const { login } = authAction;

class SignIn extends React.Component {
  state = {
    redirectToReferrer: false,
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
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className="isoSignInPage">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">Isomorphic</Link>
          </div>

          <div className="isoSignInForm">
            <div className="isoInputWrapper">
              <Input size="large" placeholder="Username" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" type="password" placeholder="Password" />
            </div>

            <div className="isoInputWrapper isoLeftRightComponent">
              <Checkbox>Remember me</Checkbox>
              <Button type="primary" onClick={this.handleLogin}>
                Sign in
              </Button>
            </div>

            <div className="isoInputWrapper isoOtherLogin">
              <Button onClick={this.handleLogin} type="primary btnFacebook">
                Sign in with Facebook
              </Button>
              <Button onClick={this.handleLogin} type="primary btnGooglePlus">
                Sign in with Google Plus
              </Button>

              {Auth0.isValid  &&
                <Button
                  onClick={() => {
                    Auth0.login();
                  }}
                  type="primary btnAuthZero">
                  Sign in with Auth0
                </Button>}

              {Firebase.isValid &&
                <FirebaseLogin login={this.handleLogin} />}
            </div>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                Forgot password
              </Link>
              <Link to="/signup">Create an Isomorphoic account</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
  }),
  { login },
)(SignIn);
