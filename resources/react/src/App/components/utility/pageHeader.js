import React from 'react';
import { ComponentTitleWrapper } from './styles/pageHeader.style';

export default props =>
  <ComponentTitleWrapper className="isoComponentTitle">
    {props.children}
  </ComponentTitleWrapper>;
