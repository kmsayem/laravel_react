import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from 'App/components/uielements/input';
import Button from 'App/components/uielements/button';
import IntlMessages from 'App/components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './styles/forgotPassword.style';

export default class extends Component {
  render() {
    return (
      <ForgotPasswordStyleWrapper className="isoForgotPassPage">
        <div className="isoFormContentWrapper">
          <div className="isoFormContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.forgetPassTitle" />
              </Link>
            </div>

            <div className="isoFormHeadText">
              <h3>
                <IntlMessages id="page.forgetPassSubTitle" />
              </h3>
              <p>
                <IntlMessages id="page.forgetPassDescription" />
              </p>
            </div>

            <div className="isoForgotPassForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Button type="primary">
                  <IntlMessages id="page.sendRequest" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ForgotPasswordStyleWrapper>
    );
  }
}
