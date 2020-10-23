import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from '@/App/components/uielements/popover';
import IntlMessages from '@/App/components/utility/intlMessages';
import authAction from '@/redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="userDropdown">
        <a className="dropdownLink" href="# ">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="dropdownLink" href="# ">
          <IntlMessages id="topbar.help" />
        </a>
        <a className="dropdownLink" onClick={this.props.logout} href="# ">
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="imgWrapper">
          <img alt="user" src={'/images/user1.png'} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(
  null,
  { logout }
)(TopbarUser);
