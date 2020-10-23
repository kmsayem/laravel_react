import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius, boxShadow } from '@/settings/style-util';
import WithDirection from '@/settings/withDirection';

const TopbarDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: -12px -16px;
  width: 360px;
  min-width: 160px;
  flex-shrink: 0;
  ${borderRadius('5px')};
  ${boxShadow('0 2px 10px rgba(0,0,0,0.2)')};
  ${transition()};

  @media only screen and (max-width: 767px) {
    width: 310px;
  }

  &.userDropdown {
    padding: 7px 0;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 220px;
    min-width: 160px;
    flex-shrink: 0;
    ${borderRadius('5px')};
    ${boxShadow('0 2px 10px rgba(0,0,0,0.2)')};
    ${transition()};

    .dropdownLink {
      font-size: 13px;
      color: ${palette('text', 1)};
      line-height: 1.1;
      padding: 7px 15px;
      background-color: transparent;
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      ${transition()};

      &:hover {
        background-color: ${palette('secondary', 6)};
      }
    }
  }
`;

export default WithDirection(TopbarDropdownWrapper);
