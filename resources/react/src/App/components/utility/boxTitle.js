import React from 'react';
import { BoxTitle, BoxSubTitle } from './styles/boxTitle.style';

export default props => {
  return (
    <div>
      {props.title
        ? <BoxTitle className="boxTitle">
            {' '}{props.title}{' '}
          </BoxTitle>
        : ''}
      {props.subtitle
        ? <BoxSubTitle className="boxSubTitle">
            {' '}{props.subtitle}{' '}
          </BoxSubTitle>
        : ''}
    </div>
  );
};
