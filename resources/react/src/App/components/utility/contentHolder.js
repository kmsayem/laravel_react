import React from 'react';
import { ContentHolderWrapper } from './styles/contentHolder.style';

export default props => (
  <ContentHolderWrapper className="isoExampleWrapper" style={props.style}>
    {props.children}
  </ContentHolderWrapper>
);
