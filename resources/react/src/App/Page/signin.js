import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Input,
  Button,
  Checkbox
} from '@/App/components/uielements';
import { Form } from 'antd';
import authAction from '@/redux/auth/actions';
import appAction from '@/redux/app/actions';
// import Auth0 from 'helpers/auth0';
import IntlMessages from '../components/utility/intlMessages';
import SignInStyleWrapper from './styles/signin.style';

const { login } = authAction;
const { clearMenu } = appAction;

class SignIn extends Component {
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
  handleLogin = (token = false) => {
    const { login, clearMenu } = this.props;
    if (token) {
      login(token);
    } else {
      login();
    }
    clearMenu();
    this.props.history.push('/dashboard');
  };

  onFinish = values => {
    console.log('Received values of form: ', values);
    this.handleLogin();
  };

  render() {
    // const { history } = this.props;
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <Form name="signInForm" layout={'vertical'} onFinish={this.onFinish}>
                <Form.Item name="username" label="Email">
                  <Input type="text" placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" label="Password">
                  <Input type="password" placeholder="Password" />
                </Form.Item>
                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button type="primary" htmlType="submit">
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>

                <p className="isoHelperText">
                  <IntlMessages id="page.signInPreview" />
                </p>

                <div className="isoInputWrapper isoOtherLogin">
                  <Button
                    onClick={this.handleLogin}
                    type="primary"
                    className="btnFacebook"
                  >
                    <IntlMessages id="page.signInFacebook" />
                  </Button>
                  <Button
                    onClick={this.handleLogin}
                    type="primary"
                    className="btnGooglePlus"
                  >
                    <IntlMessages id="page.signInGooglePlus" />
                  </Button>
                </div>
                <div className="isoCenterComponent isoHelperWrapper">
                  <Link to="/forgotpassword" className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                  </Link>
                  <Link to="/signup">
                    <IntlMessages id="page.signInCreateAccount" />
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false,
  }),
  { login, clearMenu }
)(SignIn);
