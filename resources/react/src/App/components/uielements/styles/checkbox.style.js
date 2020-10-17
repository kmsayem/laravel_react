import styled from 'styled-components';
import { palette } from 'styled-theme';

const AntCheckbox = ComponentName => styled(ComponentName)`
  &.ant-checkbox-wrapper {
    font-size: 13px;
    color: ${palette('text', 1)};
    vertical-align: middle;

    .ant-checkbox {
      top: inherit;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${palette('primary', 0)};
      border-color: ${palette('primary', 0)};
    }
    .ant-checkbox-checked::after{
      border-color: ${palette('primary', 0)};
    }
  }
  &.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${palette('primary', 0)};
  }
`;

export default AntCheckbox;
