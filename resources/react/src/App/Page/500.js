import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IntlMessages from 'App/components/utility/intlMessages';
import FiveZeroZeroStyleWrapper from './styles/500.style';

export default class extends Component {
  render() {
    return (
      <FiveZeroZeroStyleWrapper className="iso500Page">
        <div className="iso500Content">
          <h1>
            <IntlMessages id="page500.title" />
          </h1>
          <h3>
            <IntlMessages id="page500.subTitle" />
          </h3>
          <p>
            <IntlMessages id="page500.description" />
          </p>
          <button type="button">
            <Link to="/dashboard">
              <IntlMessages id="page500.backButton" />
            </Link>
          </button>
        </div>

        <div className="iso500Artwork">
          <img alt="#" src={'/images/rob.png'} />
        </div>
      </FiveZeroZeroStyleWrapper>
    );
  }
}
